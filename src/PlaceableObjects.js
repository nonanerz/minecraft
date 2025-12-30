import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class PlaceableObjectsManager {
  constructor(scene, world, physicsWorld) {
    this.scene = scene;
    this.world = world;
    this.physicsWorld = physicsWorld;
    this.objects = new Map(); // key: "x,y,z", value: object data
  }

  clearAll() {
    // Remove all objects (skip door_top helpers, they share mesh)
    const keys = Array.from(this.objects.keys());
    for (const key of keys) {
      const obj = this.objects.get(key);
      if (!obj) continue;
      if (obj.type === 'door_top') {
        this.objects.delete(key);
        continue;
      }
      this.removeObject(obj.position?.x ?? parseInt(key.split(',')[0], 10), obj.position?.y ?? parseInt(key.split(',')[1], 10), obj.position?.z ?? parseInt(key.split(',')[2], 10));
    }
    this.objects.clear();
  }

  exportState() {
    const out = [];
    for (const [, obj] of this.objects) {
      if (!obj || obj.type === 'door_top') continue;
      out.push({
        type: obj.type,
        position: obj.position,
        rotation: obj.rotation ?? 0,
        data: obj.data ?? {}
      });
    }
    return out;
  }

  importState(state) {
    this.clearAll();
    if (!Array.isArray(state)) return;
    for (const entry of state) {
      if (!entry || typeof entry !== 'object') continue;
      const { type, position, rotation, data } = entry;
      if (!position) continue;
      const ok = this.placeObject(type, position.x, position.y, position.z, rotation ?? 0);
      if (!ok) continue;
      const obj = this.getObject(position.x, position.y, position.z);
      if (obj && obj.data && data) {
        // Deep-ish copy of stored data (inventory arrays etc.)
        obj.data = structuredClone ? structuredClone(data) : JSON.parse(JSON.stringify(data));
        // Door open state should reflect collisions
        if (obj.type === 72 && obj.data.isOpen) {
          // Ensure collision removed when open
          if (obj.physicsBody) this.physicsWorld.removeBody(obj.physicsBody);
          // Visual open
          if (obj.mesh?.userData?.door) obj.mesh.userData.door.rotation.y = -Math.PI / 2;
        }
      }
    }
  }

  placeObject(type, x, y, z, rotation = 0) {
    const key = `${x},${y},${z}`;
    
    // Check if space is available
    if (type === 72) {
      // Door needs 2 blocks height
      if (this.world.getBlock(x, y, z) !== 0 || this.world.getBlock(x, y + 1, z) !== 0) {
        return false; // Not enough space
      }
      
      // Check if both positions are free
      if (this.objects.has(key) || this.objects.has(`${x},${y + 1},${z}`)) {
        return false;
      }
    } else {
      // Remove existing object at this position
      if (this.objects.has(key)) {
        this.removeObject(x, y, z);
      }
    }
    
    let mesh;
    let objectData = {
      type,
      position: { x, y, z },
      rotation,
      data: {} // For storing extra data like chest inventory
    };
    
    if (type === 70) {
      // Bed
      mesh = this.createBed();
      objectData.data.sleepable = true;
    } else if (type === 71) {
      // Chest
      mesh = this.createChest();
      objectData.data.inventory = new Array(27).fill(null); // 3x9 inventory
    } else if (type === 72) {
      // Door (occupies 2 blocks)
      mesh = this.createDoor();
      objectData.data.isOpen = false;
      objectData.data.multiBlock = true;
      objectData.data.topBlock = `${x},${y + 1},${z}`;
    }
    
    if (mesh) {
      mesh.position.set(x + 0.5, y, z + 0.5);
      mesh.rotation.y = rotation;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      
      objectData.mesh = mesh;
      
      // Add collision for door when closed
      if (type === 72) {
        // Calculate door position based on rotation
        let offsetX = 0, offsetZ = 0;
        const angle = rotation % (Math.PI * 2);
        
        if (Math.abs(angle) < 0.1) {
          // Facing Z+
          offsetZ = 0.4;
        } else if (Math.abs(angle - Math.PI / 2) < 0.1) {
          // Facing X-
          offsetX = -0.4;
        } else if (Math.abs(angle - Math.PI) < 0.1) {
          // Facing Z-
          offsetZ = -0.4;
        } else {
          // Facing X+
          offsetX = 0.4;
        }
        
        const doorBody = new CANNON.Body({
          mass: 0, // Static
          position: new CANNON.Vec3(x + 0.5 + offsetX, y + 1, z + 0.5 + offsetZ),
          shape: new CANNON.Box(new CANNON.Vec3(0.45, 1, 0.1))
        });
        doorBody.quaternion.setFromEuler(0, rotation, 0);
        this.physicsWorld.addBody(doorBody);
        objectData.physicsBody = doorBody;
        
        // Mark top block as occupied by door
        this.objects.set(objectData.data.topBlock, { 
          type: 'door_top', 
          bottomBlock: key,
          mesh: mesh // Share same mesh
        });
      }
      
      this.objects.set(key, objectData);
      
      return true;
    }
    
    return false;
  }

  createBed() {
    const group = new THREE.Group();
    
    // Bed frame (wood) - positioned from ground up
    const frameGeo = new THREE.BoxGeometry(1, 0.2, 2);
    const frameMat = new THREE.MeshLambertMaterial({ color: 0x8d6e63 });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.y = 0.4; // 0.3 (legs) + 0.1 (half of frame height)
    group.add(frame);
    
    // Mattress (red wool)
    const mattressGeo = new THREE.BoxGeometry(0.9, 0.3, 1.9);
    const mattressMat = new THREE.MeshLambertMaterial({ color: 0xff5555 });
    const mattress = new THREE.Mesh(mattressGeo, mattressMat);
    mattress.position.y = 0.65; // On top of frame
    group.add(mattress);
    
    // Pillow (white)
    const pillowGeo = new THREE.BoxGeometry(0.7, 0.15, 0.5);
    const pillowMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const pillow = new THREE.Mesh(pillowGeo, pillowMat);
    pillow.position.set(0, 0.875, -0.65);
    group.add(pillow);
    
    // Legs
    const legGeo = new THREE.BoxGeometry(0.1, 0.3, 0.1);
    const legMat = new THREE.MeshLambertMaterial({ color: 0x6d4c41 });
    const positions = [
      [-0.4, 0.15, -0.9],
      [0.4, 0.15, -0.9],
      [-0.4, 0.15, 0.9],
      [0.4, 0.15, 0.9]
    ];
    
    positions.forEach(pos => {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(...pos);
      group.add(leg);
    });
    
    return group;
  }

  createChest() {
    const group = new THREE.Group();
    
    // Chest body (brown wood) - starts from ground
    const bodyGeo = new THREE.BoxGeometry(0.875, 0.875, 0.875);
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0x8b6914 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.4375; // Half of body height
    group.add(body);
    
    // Chest lid (slightly lighter)
    const lidGeo = new THREE.BoxGeometry(0.875, 0.25, 0.875);
    const lidMat = new THREE.MeshLambertMaterial({ color: 0xa67c1b });
    const lid = new THREE.Mesh(lidGeo, lidMat);
    lid.position.y = 1.0; // On top of body
    lid.position.z = 0;
    
    // Pivot point for opening at the back edge
    lid.geometry.translate(0, 0, -0.4375);
    group.add(lid);
    
    // Lock (dark gray)
    const lockGeo = new THREE.BoxGeometry(0.15, 0.15, 0.05);
    const lockMat = new THREE.MeshLambertMaterial({ color: 0x4a4a4a });
    const lock = new THREE.Mesh(lockGeo, lockMat);
    lock.position.set(0, 0.5, 0.45);
    group.add(lock);
    
    // Store lid reference for animation
    group.userData.lid = lid;
    group.userData.lock = lock;
    
    return group;
  }

  createDoor() {
    const group = new THREE.Group();
    
    // Door panel (wood) - tall and thin
    const doorGeo = new THREE.BoxGeometry(0.875, 1.875, 0.1875);
    const doorMat = new THREE.MeshLambertMaterial({ color: 0x8d6e63 });
    const door = new THREE.Mesh(doorGeo, doorMat);
    
    // Position door for rotation around left edge (hinge side)
    // Translate geometry so pivot is at edge
    door.geometry.translate(0.4375, 0, 0);
    door.position.set(-0.4375, 0.9375, 0); // Center of block space
    group.add(door);
    
    // Door frame details (decorative)
    const stripGeo = new THREE.BoxGeometry(0.08, 1.9, 0.05);
    const frameMat = new THREE.MeshLambertMaterial({ color: 0x6d4c41 });
    
    // Vertical strips on door
    const leftStrip = new THREE.Mesh(stripGeo, frameMat);
    leftStrip.position.set(0.05, 0, 0);
    door.add(leftStrip);
    
    const rightStrip = new THREE.Mesh(stripGeo, frameMat);
    rightStrip.position.set(0.825, 0, 0);
    door.add(rightStrip);
    
    // Handle (iron)
    const handleGeo = new THREE.BoxGeometry(0.08, 0.15, 0.1);
    const handleMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.position.set(0.75, 0, 0.12);
    door.add(handle);
    
    // Store door reference for animation
    group.userData.door = door;
    
    return group;
  }

  toggleDoor(x, y, z) {
    const key = `${x},${y},${z}`;
    const obj = this.objects.get(key);
    
    if (obj && obj.type === 72) {
      obj.data.isOpen = !obj.data.isOpen;
      
      // Remove/add collision based on open state
      if (obj.physicsBody) {
        if (obj.data.isOpen) {
          // Remove collision when open
          this.physicsWorld.removeBody(obj.physicsBody);
        } else {
          // Add collision when closed
          this.physicsWorld.addBody(obj.physicsBody);
        }
      }
      
      // Animate door
      const targetRotation = obj.data.isOpen ? -Math.PI / 2 : 0;
      
      // Simple animation
      const animate = () => {
        const currentRotation = obj.mesh.userData.door.rotation.y;
        const diff = targetRotation - currentRotation;
        
        if (Math.abs(diff) > 0.01) {
          obj.mesh.userData.door.rotation.y += diff * 0.2;
          requestAnimationFrame(animate);
        } else {
          obj.mesh.userData.door.rotation.y = targetRotation;
        }
      };
      
      animate();
      return true;
    }
    
    return false;
  }

  getObject(x, y, z) {
    const key = `${x},${y},${z}`;
    return this.objects.get(key);
  }

  removeObject(x, y, z) {
    const key = `${x},${y},${z}`;
    const obj = this.objects.get(key);
    
    if (obj) {
      // If it's top part of door, remove the bottom
      if (obj.type === 'door_top') {
        const bottomKey = obj.bottomBlock;
        const bottomObj = this.objects.get(bottomKey);
        if (bottomObj) {
          return this.removeObject(bottomObj.position.x, bottomObj.position.y, bottomObj.position.z);
        }
      }
      
      // Remove multi-block parts (like door top)
      if (obj.data && obj.data.topBlock) {
        this.objects.delete(obj.data.topBlock);
      }
      
      if (obj.mesh && obj.type !== 'door_top') {
        this.scene.remove(obj.mesh);
        
        // Clean up geometry and materials
        obj.mesh.traverse((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(m => m.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }
      
      // Remove physics body if exists
      if (obj.physicsBody) {
        this.physicsWorld.removeBody(obj.physicsBody);
      }
      
      this.objects.delete(key);
      return true;
    }
    
    return false;
  }

  raycastObject(raycaster) {
    // Check which object was hit
    for (const [key, obj] of this.objects) {
      if (obj.mesh && obj.type !== 'door_top') {
        const intersects = raycaster.intersectObject(obj.mesh, true);
        if (intersects.length > 0) {
          return obj;
        }
      }
    }
    return null;
  }
  
  isPositionOccupied(x, y, z) {
    const key = `${x},${y},${z}`;
    return this.objects.has(key);
  }

  // For bed: sleep and skip to morning
  sleep(dayNightManager) {
    if (dayNightManager) {
      dayNightManager.skipToMorning();
      return true;
    }
    return false;
  }

  // Chest inventory methods
  openChest(x, y, z) {
    const obj = this.getObject(x, y, z);
    if (obj && obj.type === 71) {
      // Animate lid opening
      if (obj.mesh.userData.lid) {
        // Rotate around back edge
        obj.mesh.userData.lid.rotation.x = -Math.PI / 4;
      }
      // Move lock with lid
      if (obj.mesh.userData.lock) {
        obj.mesh.userData.lock.position.z = 0.35;
        obj.mesh.userData.lock.position.y = 0.7;
      }
      return obj.data.inventory;
    }
    return null;
  }

  closeChest(x, y, z) {
    const obj = this.getObject(x, y, z);
    if (obj && obj.type === 71) {
      // Animate lid closing
      if (obj.mesh.userData.lid) {
        obj.mesh.userData.lid.rotation.x = 0;
      }
      // Reset lock position
      if (obj.mesh.userData.lock) {
        obj.mesh.userData.lock.position.z = 0.45;
        obj.mesh.userData.lock.position.y = 0.5;
      }
    }
  }
}

