import * as THREE from 'three';
import { ITEM_DEFINITIONS, ITEM_PATTERNS } from './ItemData.js';

export class HandManager {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.handGroup = new THREE.Group();
    this.currentTool = null;
    this.currentToolType = null;
    this.animationTime = 0;
    this.swingTime = 0;
    this.isSwinging = false;
    
    // Create hand mesh
    this.createHand();
    
    // Position hand in front of camera - visible in viewport
    // Adjusted to be more visible: closer to center, higher up, closer to camera
    this.handGroup.position.set(0.25, -0.25, -0.4);
    this.handGroup.rotation.set(0, -0.1, 0);
    this.camera.add(this.handGroup);
  }

  createVoxelMesh(pattern, palette, thickness = 1) {
    const group = new THREE.Group();
    const pixelSize = 0.02; // Voxel size
    
    // Center offset
    const height = pattern.length;
    const width = pattern[0].length;
    const offsetX = -(width * pixelSize) / 2;
    const offsetY = -(height * pixelSize) / 2;
    const offsetZ = -(thickness * pixelSize) / 2;

    const geometry = new THREE.BoxGeometry(pixelSize, pixelSize, pixelSize);
    
    // Iterate pattern
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const char = pattern[y][x];
            if (char !== ' ' && palette[char]) {
                const material = new THREE.MeshLambertMaterial({ color: palette[char] });
                
                // Create thickness depth
                for (let z = 0; z < thickness; z++) {
                    const pixel = new THREE.Mesh(geometry, material);
                    // In texture, y goes down (indices), in 3D y goes up. 
                    // We build from top (y=0) to bottom (y=height-1).
                    // So y=0 should be high Y.
                    pixel.position.set(
                        offsetX + x * pixelSize,
                        -offsetY - y * pixelSize, // Flip Y logic: 0 is top
                        offsetZ + z * pixelSize
                    );
                    pixel.castShadow = true;
                    pixel.receiveShadow = true;
                    group.add(pixel);
                }
            }
        }
    }
    return group;
  }

  createHand() {
    // Clear existing
    this.handGroup.clear();
    
    // Create arm (voxel style)
    // 4x12x4 arm
    // Skin color
    const palette = {
        'S': 0xf4a460, // Skin
        'C': 0xffffff  // Cloth/Sleeve (white t-shirt)
    };

    const armGeo = new THREE.BoxGeometry(0.08, 0.24, 0.08);
    const armMat = new THREE.MeshLambertMaterial({ color: 0xf4a460 });
    const arm = new THREE.Mesh(armGeo, armMat);
    // Center is -0.12 so top is at 0 relative to handGroup center
    arm.position.set(0, -0.12, 0); 
    
    this.handGroup.add(arm);
    this.arm = arm;
  }

  setTool(toolType) {
    // Only update if tool changed
    if (this.currentToolType === toolType) return;
    
    if (this.currentTool) {
      this.handGroup.remove(this.currentTool);
      this.currentTool = null;
    }
    
    this.currentToolType = toolType;
    
    if (!toolType) return;
    
    // Create tool mesh based on type
    const toolInfo = ITEM_DEFINITIONS[toolType];
    if (toolInfo) {
      this.currentTool = this.createToolMesh(toolInfo);
      if (this.currentTool) {
        this.currentTool.scale.set(1.5, 1.5, 1.5); // Make tools slightly bigger
        this.currentTool.position.set(0, 0.1, -0.15); // Adjust position relative to hand
        this.currentTool.rotation.set(0, Math.PI / 2, 0); // Face forward
        this.handGroup.add(this.currentTool);
      }
    }
  }

  getToolInfo(itemType) {
    return ITEM_DEFINITIONS[itemType] || null;
  }

  createToolMesh(toolInfo) {
    if (!toolInfo) return null;

    const palette = {
        'S': 0x6d4c41, // Stick (Dark Brown)
        'M': toolInfo.tier ? toolInfo.tier.color : 0xffffff, // Material
    };

    let pattern = null;
    if (toolInfo.type === 'armor') {
        // Armor held in hand uses its icon pattern
        pattern = ITEM_PATTERNS[toolInfo.part];
    } else {
        pattern = ITEM_PATTERNS[toolInfo.type];
    }

    if (!pattern) return null;

    // Convert string pattern to 2D array
    const grid = pattern.map(row => row.split(''));
    return this.createVoxelMesh(grid, palette, 1);
  }

  startSwing() {
    this.isSwinging = true;
    this.swingTime = 0;
  }

  update(dt, selectedItem) {
    // Update tool based on selected item
    const toolType = selectedItem ? selectedItem.type : null;
    const toolInfo = selectedItem ? this.getToolInfo(selectedItem.type) : null;
    
    // Set tool (will only update if changed)
    this.setTool(toolInfo ? toolType : null);
    
    // Idle animation
    this.animationTime += dt;
    const idleBob = Math.sin(this.animationTime * 2.5) * 0.008;
    const idleSway = Math.sin(this.animationTime * 1.8) * 0.015;
    
    // Swing animation
    if (this.isSwinging) {
      this.swingTime += dt * 10; // Faster swing speed for responsiveness
      
      if (this.swingTime >= Math.PI) {
        this.isSwinging = false;
        this.swingTime = 0;
      }
      
      // Swing motion (chop)
      const swingProgress = Math.sin(this.swingTime);
      
      this.handGroup.rotation.x = -swingProgress * 1.2;
      this.handGroup.rotation.y = -0.5 + swingProgress * 0.5; // Slight twist
      this.handGroup.position.z = -0.6 - swingProgress * 0.3; // Push forward
      this.handGroup.position.y = -0.25 - swingProgress * 0.1;
      
    } else {
      // Reset to idle position with subtle animation
      this.handGroup.rotation.x = THREE.MathUtils.lerp(this.handGroup.rotation.x, idleBob * 0.5, 0.1);
      this.handGroup.rotation.y = THREE.MathUtils.lerp(this.handGroup.rotation.y, -0.3 + idleSway * 0.5, 0.1);
      this.handGroup.rotation.z = THREE.MathUtils.lerp(this.handGroup.rotation.z, idleSway * 0.2, 0.1);
      
      this.handGroup.position.y = THREE.MathUtils.lerp(this.handGroup.position.y, -0.25 + idleBob, 0.1);
      this.handGroup.position.x = THREE.MathUtils.lerp(this.handGroup.position.x, 0.35 + idleSway, 0.1);
      this.handGroup.position.z = THREE.MathUtils.lerp(this.handGroup.position.z, -0.6, 0.1);
    }
  }
}
