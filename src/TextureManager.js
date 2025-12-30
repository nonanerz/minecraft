import * as THREE from 'three';

export class TextureManager {
  constructor() {
    this.loader = new THREE.TextureLoader();
    this.material = null;
    this.transparentMaterial = null; // For water/glass if we separate them
  }

  load() {
    // 256x256 texture atlas (16x16 grid of 16x16 blocks)
    // Increased size for slightly better detail if needed, but 16px blocks are standard.
    // Keeping 16px blocks but 128x128 canvas is fine (8x8 grid).
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    // Fill with magenta (missing texture indicator)
    ctx.fillStyle = '#ff00ff';
    ctx.fillRect(0, 0, 128, 128);
    
    // Noise helper
    const noise = (x, y, scale = 1, intensity = 20) => {
        const val = Math.sin(x * scale) * Math.cos(y * scale) * intensity;
        return val;
    };

    // Helper to draw textured rect
    const draw = (x, y, baseColor, noiseIntensity = 0.1, pattern = 'noise') => {
        const bx = x * 16;
        const by = y * 16;
        
        // Fill base
        ctx.fillStyle = baseColor;
        ctx.fillRect(bx, by, 16, 16);
        
        // Add noise/texture
        const imageData = ctx.getImageData(bx, by, 16, 16);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const ix = (i / 4) % 16;
            const iy = Math.floor((i / 4) / 16);
            
            let mod = 0;
            if (pattern === 'noise') {
                mod = (Math.random() - 0.5) * 255 * noiseIntensity;
            } else if (pattern === 'bricks') {
                // Simple brick pattern
                const row = Math.floor(iy / 4);
                const col = ix + (row % 2) * 4;
                const isMortar = (iy % 4 === 0) || (col % 8 === 0);
                mod = isMortar ? -40 : 10;
            } else if (pattern === 'log') {
                // Vertical streaks
                mod = (Math.random() - 0.5) * 30 + ((ix % 4 === 0) ? -20 : 0);
            } else if (pattern === 'rings') {
                // Rings for log top
                const dx = ix - 7.5;
                const dy = iy - 7.5;
                const dist = Math.sqrt(dx*dx + dy*dy);
                mod = (Math.sin(dist * 1.5) > 0) ? -20 : 10;
            } else if (pattern === 'leaves') {
                mod = (Math.random() > 0.6) ? -30 : 10;
            }
            
            data[i] = Math.min(255, Math.max(0, data[i] + mod));     // R
            data[i+1] = Math.min(255, Math.max(0, data[i+1] + mod)); // G
            data[i+2] = Math.min(255, Math.max(0, data[i+2] + mod)); // B
        }
        
        ctx.putImageData(imageData, bx, by);
    };
    
    const drawOre = (x, y, baseColor, oreColor) => {
        draw(x, y, baseColor, 0.15); // Stone base
        
        const bx = x * 16;
        const by = y * 16;
        ctx.fillStyle = oreColor;
        
        // Clusters
        const clusters = [
            [4, 4], [5, 4], [4, 5],
            [10, 10], [11, 10], [10, 11], [11, 11],
            [12, 3], [13, 3],
            [3, 12]
        ];
        
        for (const [ox, oy] of clusters) {
            ctx.fillRect(bx + ox, by + oy, 1, 1);
        }
    };

    // Row 0
    // (0,0) Dirt
    draw(0, 0, '#795548', 0.2);
    // (1,0) Grass Side
    draw(1, 0, '#795548', 0.2); // Dirt bg
    // Draw green top
    ctx.fillStyle = '#4caf50';
    ctx.fillRect(16, 0, 16, 4); // Top strip
    // Drips
    ctx.fillRect(16 + 2, 4, 1, 2);
    ctx.fillRect(16 + 5, 4, 2, 3);
    ctx.fillRect(16 + 9, 4, 1, 1);
    ctx.fillRect(16 + 13, 4, 2, 4);
    
    // (2,0) Grass Top
    draw(2, 0, '#4caf50', 0.15);
    // (3,0) Stone
    draw(3, 0, '#9e9e9e', 0.15);

    // Row 1
    // (0,1) Wood Side
    draw(0, 1, '#5d4037', 0.1, 'log');
    // (1,1) Wood Top
    draw(1, 1, '#5d4037', 0.1, 'rings');
    // (2,1) Leaves
    draw(2, 1, '#388e3c', 0.1, 'leaves'); // Darker green
    // (3,1) Sand
    draw(3, 1, '#fff59d', 0.15);

    // Row 2
    // (0,2) Water
    draw(0, 2, '#42a5f5', 0.05); // Keep water fairly clean
    // (1,2) Planks
    draw(1, 2, '#a1887f', 0.1); // Planks (add horizontal lines manually)
    ctx.fillStyle = '#6d4c41'; // Darker lines
    ctx.fillRect(16, 32, 16, 1);
    ctx.fillRect(16, 36, 16, 1);
    ctx.fillRect(16, 40, 16, 1);
    ctx.fillRect(16, 44, 16, 1);
    
    // (2,2) Bedrock
    draw(2, 2, '#212121', 0.4); // Heavy noise
    // (3,2) Cobblestone
    draw(3, 2, '#757575', 0.1, 'bricks');

    // Row 3
    // (0,3) Lava
    draw(0, 3, '#ff6d00', 0.1);
    // Add hot spots
    ctx.fillStyle = '#ffab00';
    ctx.fillRect(0+4, 48+4, 4, 2);
    ctx.fillRect(0+10, 48+10, 3, 3);
    
    // (1,3) Coal Ore
    drawOre(1, 3, '#9e9e9e', '#212121');
    // (2,3) Iron Ore
    drawOre(2, 3, '#9e9e9e', '#d7ccc8');
    // (3,3) Diamond Ore
    drawOre(3, 3, '#9e9e9e', '#00bcd4');

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.colorSpace = THREE.SRGBColorSpace;
    
    // Important for voxel look
    texture.generateMipmaps = false; 
    
    this.material = new THREE.MeshLambertMaterial({
      map: texture,
      // IMPORTANT: keep DoubleSide to avoid "invisible walls / see-through blocks"
      // when any face winding ends up flipped. This is a voxel project; stability > perf here.
      side: THREE.DoubleSide,
      transparent: false,
      alphaTest: 0,
      depthTest: true,
      depthWrite: true
    });
    
    return this.material;
  }

  getUVs(blockType, face) {
    // Grid is 8x8. Step = 0.125.
    let col = 0;
    let row = 0;
    
    switch (blockType) {
        case 1: // Dirt
            col = 0; row = 0; break;
        case 2: // Grass
            if (face === 'top') { col = 2; row = 0; }
            else if (face === 'bottom') { col = 0; row = 0; }
            else { col = 1; row = 0; }
            break;
        case 3: // Stone
            col = 3; row = 0; break;
        case 4: // Wood Log
            if (face === 'top' || face === 'bottom') { col = 1; row = 1; }
            else { col = 0; row = 1; }
            break;
        case 5: // Sand
            col = 3; row = 1; break;
        case 6: // Water
            col = 0; row = 2; break;
        case 7: // Leaves
            col = 2; row = 1; break;
        case 8: // Planks
            col = 1; row = 2; break;
        case 9: // Bedrock
            col = 2; row = 2; break;
        case 15: // Lava
            col = 0; row = 3; break;
        case 40: // Coal Ore
            col = 1; row = 3; break;
        case 41: // Iron Ore
            col = 2; row = 3; break;
        case 43: // Diamond Ore
            col = 3; row = 3; break;
        case 44: // Cobblestone
            col = 3; row = 2; break;
        default:
            col = 0; row = 0; break;
    }

    const step = 0.125;
    const u = col * step;
    const v = 1.0 - ((row + 1) * step);

    const eps = 0.5 / 128;
    const u0 = u + eps;
    const u1 = u + step - eps;
    const v0 = v + eps;
    const v1 = v + step - eps;
    
    return [
        { u: u0, v: v1 }, // TL
        { u: u1, v: v1 }, // TR
        { u: u0, v: v0 }, // BL
        { u: u1, v: v0 }  // BR
    ];
  }
}
