import * as THREE from 'three';

export const CHUNK_SIZE = 16;
export const CHUNK_HEIGHT = 256;
// If this is too high the world looks like a flat ocean and surface queries
// (spawn/animals) will pick water as "ground". Keep it modest.
const SEA_LEVEL = 18;
const LAVA_LEVEL = 8;

export class Chunk {
  constructor(x, z, textureManager) {
    this.x = x;
    this.z = z;
    this.textureManager = textureManager;
    this.data = new Uint8Array(CHUNK_SIZE * CHUNK_HEIGHT * CHUNK_SIZE);
    this.mesh = null;
    this.waterMesh = null; 
    this.isDirty = true;
    this.heightMap = new Int16Array(CHUNK_SIZE * CHUNK_SIZE);
    this.heightMap.fill(-1);
    this.genVersion = 0;
  }

  generate(noise2D, noise3D, genVersion = 0, seed = 0) {
    // Clear previous data
    this.data.fill(0);
    this.heightMap.fill(-1);
    this.genVersion = genVersion;

    // Deterministic "random" based on world coords + seed.
    const hash32 = (n) => {
      n |= 0;
      n ^= n >>> 16;
      n = Math.imul(n, 0x7feb352d);
      n ^= n >>> 15;
      n = Math.imul(n, 0x846ca68b);
      n ^= n >>> 16;
      return n >>> 0;
    };
    const rand01 = (a, b, c, salt = 0) => {
      // a,b,c should be ints (world coords)
      const h =
        hash32((seed | 0) ^ Math.imul(a | 0, 374761393) ^ Math.imul(b | 0, 668265263) ^ Math.imul(c | 0, 2147483647) ^ (salt | 0));
      return h / 4294967296;
    };

    const fbm2 = (x, z, octaves = 4, lacunarity = 2.0, gain = 0.5) => {
      let amp = 1;
      let freq = 1;
      let sum = 0;
      let norm = 0;
      for (let i = 0; i < octaves; i++) {
        sum += amp * noise2D(x * freq, z * freq);
        norm += amp;
        amp *= gain;
        freq *= lacunarity;
      }
      return norm > 0 ? sum / norm : 0;
    };

    // Store biome info for tree pass
    const biomeMap = new Uint8Array(CHUNK_SIZE * CHUNK_SIZE); 
    // 0: plains, 1: forest, 2: desert, 3: mountain, 4: shore

    for (let x = 0; x < CHUNK_SIZE; x++) {
      for (let z = 0; z < CHUNK_SIZE; z++) {
        const wx = this.x * CHUNK_SIZE + x;
        const wz = this.z * CHUNK_SIZE + z;

        // "Cool world" terrain: islands/continents + hills + mountains + rivers.
        const continent = fbm2(wx / 400, wz / 400, 5); // big landmasses
        const hills = fbm2(wx / 140, wz / 140, 5);     // rolling hills
        const detail = fbm2(wx / 45, wz / 45, 3);      // small bumps
        // Shift moisture to be generally wetter (more green)
        const moisture = fbm2(wx / 300, wz / 300, 4) + 0.15;  

        // River carving: thin lines where abs(noise) is small.
        const river = Math.abs(noise2D(wx / 150, wz / 150)); // 0..1-ish
        const riverCarve = river < 0.06 ? (0.06 - river) * 90 : 0;

        // Mountains: ridges + biome mask.
        const ridge = 1 - Math.abs(noise2D(wx / 100, wz / 100)); // [0..1]
        // Reduce mountains slightly so we see more sky/land
        const mountainMask = Math.max(0, (continent * 0.5 + 0.5) - 0.2); 

        // Base height calculation
        let height =
          20 + // Higher base
          (continent * 0.5 + 0.5) * 20 +
          (hills * 0.5 + 0.5) * 15 +
          (detail * 0.5 + 0.5) * 5 +
          mountainMask * ridge * 50 -
          riverCarve;

        height = Math.min(CHUNK_HEIGHT - 32, Math.max(6, Math.floor(height)));

        // Biome Logic
        // Prioritize Green!
        let biome = 'plains';
        if (height <= SEA_LEVEL + 2) {
             biome = 'shore';
             biomeMap[z * CHUNK_SIZE + x] = 4;
        } else if (height > SEA_LEVEL + 45) {
             // Only very high peaks are "Mountain" (Stone/Snow)
             biome = 'mountain';
             biomeMap[z * CHUNK_SIZE + x] = 3;
        } else if (moisture < -0.4) {
             // Desert is now rare
             biome = 'desert';
             biomeMap[z * CHUNK_SIZE + x] = 2;
        } else if (moisture > 0.2) {
             biome = 'forest';
             biomeMap[z * CHUNK_SIZE + x] = 1;
        } else {
             biome = 'plains';
             biomeMap[z * CHUNK_SIZE + x] = 0;
        }

        const columnIndex = z * CHUNK_SIZE + x;
        this.heightMap[columnIndex] = Math.max(0, height - 1);

        for (let y = 0; y < CHUNK_HEIGHT; y++) {
          let type = 0;
          let isCave = false;
          if (y < height - 5) {
            const caveNoise = noise3D(wx / 30, y / 25, wz / 30);
            if (caveNoise > 0.6) isCave = true; // Fewer caves
          }

          if (!isCave) {
            if (y < 3) {
              type = 9; // bedrock
            } else if (y < height - 4) {
              type = 3; // stone
              
              // Ore generation
              if (y >= 5 && y <= 70) {
                const coalNoise = noise3D(wx / 15, y / 15, wz / 15);
                if (coalNoise > 0.7) type = 40; 
              }
              if (y >= 5 && y <= 50) {
                const ironNoise = noise3D(wx / 18, y / 18, wz / 18);
                if (ironNoise > 0.75) type = 41; 
              }
              if (y >= 5 && y <= 16) {
                const diamondNoise = noise3D(wx / 25, y / 25, wz / 25);
                if (diamondNoise > 0.82) type = 43; 
              }
            } else if (y < height - 1) {
              // near-surface filler
              type = biome === 'desert' || biome === 'shore' ? 5 : 1; // sand or dirt
            } else if (y === height - 1) {
              // top block
              if (biome === 'desert' || biome === 'shore') {
                type = 5; // sand
              } else if (biome === 'mountain') {
                type = 3; // stone top on mountains (maybe snow later)
              } else {
                type = 2; // grass
              }
            }
          } else {
            // Caves: water near surface, lava deep underground.
            if (y <= LAVA_LEVEL) {
              if (rand01(wx, y, wz, 101) < 0.12) type = 15; // lava pockets
            } else if (y < SEA_LEVEL) {
              type = 6;
            }
          }

          // Ocean / lakes fill
          if (type === 0 && y <= SEA_LEVEL && y >= height) {
            type = 6;
          }
          if (type === 0 && y <= LAVA_LEVEL) {
            if (rand01(wx, y, wz, 102) < 0.02) type = 15;
          }

          if (type !== 0) {
            this.setBlock(x, y, z, type, { skipHeightUpdate: true });
          }
        }
      }
    }

    this.rebuildHeightMap();

    // ---- Tree placement pass ----
    const isGrassTop = (lx, lz) => {
      const h = this.getSurfaceHeight(lx, lz);
      if (h === null) return false;
      const top = this.getBlock(lx, h, lz);
      return top === 2 && h > SEA_LEVEL + 2;
    };

    const getH = (lx, lz) => this.getSurfaceHeight(lx, lz);

    for (let x = 2; x < CHUNK_SIZE - 2; x++) {
      for (let z = 2; z < CHUNK_SIZE - 2; z++) {
        if (!isGrassTop(x, z)) continue;

        // Require a 3x3 grass patch and relatively flat ground
        const h0 = getH(x, z);
        let ok = true;
        for (let dx = -1; dx <= 1 && ok; dx++) {
          for (let dz = -1; dz <= 1; dz++) {
            if (!isGrassTop(x + dx, z + dz)) { ok = false; break; }
            const hn = getH(x + dx, z + dz);
            if (hn === null || Math.abs(hn - h0) > 2) { ok = false; break; }
          }
        }
        if (!ok) continue;

        const bCode = biomeMap[z * CHUNK_SIZE + x];
        let chance = 0;
        
        if (bCode === 1) chance = 0.08; // Forest: 8% chance per block (dense)
        else if (bCode === 0) chance = 0.005; // Plains: 0.5% chance (sparse)
        else if (bCode === 3) chance = 0.01; // Mountains: rare
        else continue; // Desert/Shore: 0

        // Deterministic per-cell tree roll
        const wx = this.x * CHUNK_SIZE + x;
        const wz = this.z * CHUNK_SIZE + z;
        if (rand01(wx, h0 | 0, wz, 201) > chance) continue;
        this.generateTree(x, h0 + 1, z, seed);
      }
    }

    // Guarantee: if we're in/near forest and we placed nothing (or almost nothing),
    // try a few random placements so trees are always visible.
    // (This prevents "no trees at all" reports.)
    let tries = 0;
    let placed = 0;
    for (let i = 0; i < biomeMap.length; i++) {
      if (biomeMap[i] === 1) { placed = 0; break; }
    }
    // Try up to 2 guaranteed trees per chunk in forest biomes.
    for (let i = 0; i < 40 && placed < 2; i++) {
      const r = rand01(this.x, i, this.z, 301);
      const r2 = rand01(this.z, i, this.x, 302);
      const x = 2 + Math.floor(r * (CHUNK_SIZE - 4));
      const z = 2 + Math.floor(r2 * (CHUNK_SIZE - 4));
      const bCode = biomeMap[z * CHUNK_SIZE + x];
      if (bCode !== 1) continue;
      if (!isGrassTop(x, z)) continue;
      const h0 = getH(x, z);
      if (h0 === null) continue;
      // Keep it fairly flat
      const hn1 = getH(x + 1, z);
      const hn2 = getH(x, z + 1);
      if (hn1 === null || hn2 === null) continue;
      if (Math.abs(hn1 - h0) > 2 || Math.abs(hn2 - h0) > 2) continue;
      this.generateTree(x, h0 + 1, z, seed);
      placed++;
      tries++;
    }

    this.isDirty = true;
  }
  
  generateTree(x, y, z, seed = 0) {
      const hash32 = (n) => {
        n |= 0;
        n ^= n >>> 16;
        n = Math.imul(n, 0x7feb352d);
        n ^= n >>> 15;
        n = Math.imul(n, 0x846ca68b);
        n ^= n >>> 16;
        return n >>> 0;
      };
      const h = hash32((seed | 0) ^ Math.imul((this.x * 16 + x) | 0, 374761393) ^ Math.imul((this.z * 16 + z) | 0, 668265263));
      const height = 4 + (h % 3);
      
      // Trunk
      for (let i = 0; i < height; i++) {
          this.setBlock(x, y + i, z, 4); // Wood
      }
      
      // Leaves
      for (let lx = x - 2; lx <= x + 2; lx++) {
          for (let lz = z - 2; lz <= z + 2; lz++) {
              for (let ly = y + height - 2; ly <= y + height + 1; ly++) {
                   // Simple leaf shape
                   if (Math.abs(lx - x) + Math.abs(lz - z) <= 2 || (ly > y + height - 1 && Math.abs(lx - x) <= 1 && Math.abs(lz - z) <= 1)) {
                       // Don't overwrite trunk
                       if (this.getBlock(lx, ly, lz) === 0) {
                            this.setBlock(lx, ly, lz, 7); // Leaves
                       }
                   }
              }
          }
      }
  }

  getBlock(x, y, z) {
    if (x < 0 || x >= CHUNK_SIZE || y < 0 || y >= CHUNK_HEIGHT || z < 0 || z >= CHUNK_SIZE) {
      return 0; 
    }
    const index = (y * CHUNK_SIZE * CHUNK_SIZE) + (z * CHUNK_SIZE) + x;
    return this.data[index];
  }

  setBlock(x, y, z, type, options = {}) {
    if (x < 0 || x >= CHUNK_SIZE || y < 0 || y >= CHUNK_HEIGHT || z < 0 || z >= CHUNK_SIZE) return;
    const index = (y * CHUNK_SIZE * CHUNK_SIZE) + (z * CHUNK_SIZE) + x;
    this.data[index] = type;
    if (!options.skipHeightUpdate) {
      this.updateColumnHeight(x, z);
    }
    this.isDirty = true;
  }

  updateColumnHeight(x, z) {
    if (x < 0 || x >= CHUNK_SIZE || z < 0 || z >= CHUNK_SIZE) return;
    const columnIndex = z * CHUNK_SIZE + x;
    for (let y = CHUNK_HEIGHT - 1; y >= 0; y--) {
      const t = this.getBlock(x, y, z);
      if (t !== 0 && t !== 6 && t !== 7) {
        this.heightMap[columnIndex] = y;
        return;
      }
    }
    this.heightMap[columnIndex] = -1;
  }

  getSurfaceHeight(x, z) {
    if (x < 0 || x >= CHUNK_SIZE || z < 0 || z >= CHUNK_SIZE) return null;
    const columnIndex = z * CHUNK_SIZE + x;
    const height = this.heightMap[columnIndex];
    if (height >= 0) return height;
    for (let y = CHUNK_HEIGHT - 1; y >= 0; y--) {
      const t = this.getBlock(x, y, z);
      if (t !== 0 && t !== 6 && t !== 7) {
        return y;
      }
    }
    return null;
  }

  rebuildHeightMap() {
    for (let x = 0; x < CHUNK_SIZE; x++) {
      for (let z = 0; z < CHUNK_SIZE; z++) {
        this.updateColumnHeight(x, z);
      }
    }
  }

  getBlockWithWorld(world, x, y, z) {
    if (y < 0 || y >= CHUNK_HEIGHT) return 0;
    if (x >= 0 && x < CHUNK_SIZE && z >= 0 && z < CHUNK_SIZE) {
      return this.getBlock(x, y, z);
    }
    if (!world) return 0;
    const wx = this.x * CHUNK_SIZE + x;
    const wz = this.z * CHUNK_SIZE + z;
    return world.getBlock(wx, y, wz);
  }

  buildMesh(world) {
    if (!this.isDirty) return;

    const positions = [];
    const normals = [];
    const uvs = [];
    const indices = [];

    let indexOffset = 0;

    for (let y = 0; y < CHUNK_HEIGHT; y++) {
      for (let z = 0; z < CHUNK_SIZE; z++) {
        for (let x = 0; x < CHUNK_SIZE; x++) {
          const type = this.getBlock(x, y, z);
          if (type === 0) continue; 

          // Right (+x)
          if (this.shouldRenderFace(world, x + 1, y, z, type)) {
            this.addFace(positions, normals, uvs, indices, x, y, z, 'right', type);
          }
          // Left (-x)
          if (this.shouldRenderFace(world, x - 1, y, z, type)) {
            this.addFace(positions, normals, uvs, indices, x, y, z, 'left', type);
          }
          // Top (+y)
          if (this.shouldRenderFace(world, x, y + 1, z, type)) {
             this.addFace(positions, normals, uvs, indices, x, y, z, 'top', type);
          }
          // Bottom (-y)
          if (this.shouldRenderFace(world, x, y - 1, z, type)) {
            this.addFace(positions, normals, uvs, indices, x, y, z, 'bottom', type);
          }
          // Front (+z)
          if (this.shouldRenderFace(world, x, y, z + 1, type)) {
            this.addFace(positions, normals, uvs, indices, x, y, z, 'front', type);
          }
          // Back (-z)
          if (this.shouldRenderFace(world, x, y, z - 1, type)) {
            this.addFace(positions, normals, uvs, indices, x, y, z, 'back', type);
          }
        }
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);

    if (this.mesh) {
      this.mesh.geometry.dispose();
      this.mesh.geometry = geometry;
    } else {
      this.mesh = new THREE.Mesh(geometry, this.textureManager.material);
      this.mesh.position.set(this.x * CHUNK_SIZE, 0, this.z * CHUNK_SIZE);
      this.mesh.castShadow = true;
      this.mesh.receiveShadow = true;
    }

    this.isDirty = false;
    return this.mesh;
  }

  shouldRenderFace(world, x, y, z, currentType) {
    const neighborType = this.getBlockWithWorld(world, x, y, z);
    
    // Water logic
    if (currentType === 6 && neighborType === 6) return false;
    // Lava logic
    if (currentType === 15 && neighborType === 15) return false;
    
    // Leaves logic (leaves are transparent-ish)
    if (currentType === 7 && neighborType === 7) return false; // Cull internal leaf faces
    
    // If neighbor is air, draw
    if (neighborType === 0) return true;
    
    // If neighbor is water/leaves, and we are solid, draw
    if (currentType !== 6 && neighborType === 6) return true;
    if (currentType !== 15 && neighborType === 15) return true;
    if (currentType !== 7 && neighborType === 7) return true;
    
    return false; // Solid neighbor
  }

  addFace(positions, normals, uvs, indices, x, y, z, face, type) {
    let v = [];
    let n = [];
    
    const uvCoords = this.textureManager.getUVs(type, face);
    const ndx = positions.length / 3;

    switch (face) {
      case 'right': 
        v = [1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0];
        n = [1, 0, 0];
        break;
      case 'left': 
        v = [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1];
        n = [-1, 0, 0];
        break;
      case 'top': 
        v = [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0];
        n = [0, 1, 0];
        break;
      case 'bottom': 
        v = [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1];
        n = [0, -1, 0];
        break;
      case 'front': 
        v = [0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1];
        n = [0, 0, 1];
        break;
      case 'back': 
        v = [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0];
        n = [0, 0, -1];
        break;
    }

    for (let i = 0; i < v.length; i += 3) {
      positions.push(v[i] + x, v[i + 1] + y, v[i + 2] + z);
    }
    for (let i = 0; i < 4; i++) normals.push(...n);
    
    uvs.push(uvCoords[2].u, uvCoords[2].v);
    uvs.push(uvCoords[3].u, uvCoords[3].v);
    uvs.push(uvCoords[0].u, uvCoords[0].v);
    uvs.push(uvCoords[1].u, uvCoords[1].v);

    indices.push(ndx, ndx + 1, ndx + 2);
    indices.push(ndx + 2, ndx + 1, ndx + 3);
  }
}
