import * as THREE from 'three';
import { Chunk } from './Chunk.js';
import { AnimalManager } from './AnimalManager.js';

export class World {
  constructor(scene, textureManager, physicsWorld = null) {
    this.scene = scene;
    this.textureManager = textureManager;
    this.chunks = new Map(); 
    this.renderDistance = 4; 
    this.chunkSize = 16;
    this.noise2D = null; 
    this.noise3D = null;
    this.physicsWorld = physicsWorld;
    this.animalManager = new AnimalManager(scene, this, physicsWorld);

    // World seed (used for deterministic generation + saves)
    this.seed = 0;

    // Block edits (only player/interaction changes). Key: "chunkX,chunkZ" -> array of [lx,y,lz,type]
    this.edits = new Map();

    // Bump this when terrain generation logic changes.
    // Chunks with older versions will auto-regenerate (fixes "world still flat" after code changes).
    this.generationVersion = 8;
  }

  getChunkKey(chunkX, chunkZ) {
    return `${chunkX},${chunkZ}`;
  }

  rebuildChunkMesh(chunk) {
    if (!chunk) return;
    const mesh = chunk.buildMesh(this);
    if (mesh && !mesh.parent) {
      this.scene.add(mesh);
    }
  }

  clearAllChunks() {
    for (const [, chunk] of this.chunks) {
      if (chunk.mesh) {
        chunk.mesh.geometry.dispose();
        this.scene.remove(chunk.mesh);
      }
    }
    this.chunks.clear();
  }

  setEditsFromSave(editsObj) {
    this.edits.clear();
    if (!editsObj || typeof editsObj !== 'object') return;
    for (const [key, arr] of Object.entries(editsObj)) {
      if (Array.isArray(arr)) this.edits.set(key, arr);
    }
  }

  exportEditsForSave() {
    const out = {};
    for (const [key, arr] of this.edits.entries()) {
      out[key] = arr;
    }
    return out;
  }

  recordEdit(chunkX, chunkZ, localX, y, localZ, type) {
    const key = this.getChunkKey(chunkX, chunkZ);
    let arr = this.edits.get(key);
    if (!arr) {
      arr = [];
      this.edits.set(key, arr);
    }
    // Replace if already exists
    for (let i = 0; i < arr.length; i++) {
      const e = arr[i];
      if (e && e[0] === localX && e[1] === y && e[2] === localZ) {
        e[3] = type;
        return;
      }
    }
    arr.push([localX, y, localZ, type]);
  }

  applyEditsToChunk(chunk) {
    if (!chunk) return;
    const key = this.getChunkKey(chunk.x, chunk.z);
    const arr = this.edits.get(key);
    if (!arr || arr.length === 0) return;

    for (const e of arr) {
      if (!e || e.length < 4) continue;
      const [lx, y, lz, type] = e;
      chunk.setBlock(lx, y, lz, type, { skipHeightUpdate: true });
    }
    chunk.rebuildHeightMap();
    chunk.isDirty = true;
  }

  markNeighborsDirty(chunkX, chunkZ) {
    const neighbors = [
      [chunkX - 1, chunkZ],
      [chunkX + 1, chunkZ],
      [chunkX, chunkZ - 1],
      [chunkX, chunkZ + 1],
    ];
    for (const [nx, nz] of neighbors) {
      const nChunk = this.chunks.get(this.getChunkKey(nx, nz));
      if (nChunk) nChunk.isDirty = true;
    }
  }

  update(playerX, playerZ, dt = 0) {
    if (!this.noise2D || !this.noise3D) return;

    const currentChunkX = Math.floor(playerX / this.chunkSize);
    const currentChunkZ = Math.floor(playerZ / this.chunkSize);

    // Load new chunks
    for (let x = -this.renderDistance; x <= this.renderDistance; x++) {
      for (let z = -this.renderDistance; z <= this.renderDistance; z++) {
        const chunkX = currentChunkX + x;
        const chunkZ = currentChunkZ + z;
        const key = this.getChunkKey(chunkX, chunkZ);

        if (!this.chunks.has(key)) {
          const chunk = new Chunk(chunkX, chunkZ, this.textureManager);
          chunk.generate(this.noise2D, this.noise3D, this.generationVersion, this.seed); // Pass both
          this.applyEditsToChunk(chunk);
          this.rebuildChunkMesh(chunk);
          this.chunks.set(key, chunk);

          // Important: now that a neighbor exists, previously-loaded chunks can
          // cull faces across the border. Mark neighbors dirty and rebuild them.
          this.markNeighborsDirty(chunkX, chunkZ);
          this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(chunkX - 1, chunkZ)));
          this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(chunkX + 1, chunkZ)));
          this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(chunkX, chunkZ - 1)));
          this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(chunkX, chunkZ + 1)));
        }

        // If generation changed, regenerate existing chunks on the fly.
        const existing = this.chunks.get(key);
        if (existing && existing.genVersion !== this.generationVersion) {
          existing.generate(this.noise2D, this.noise3D, this.generationVersion, this.seed);
          this.applyEditsToChunk(existing);
          this.rebuildChunkMesh(existing);
          this.markNeighborsDirty(existing.x, existing.z);
          this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(existing.x - 1, existing.z)));
          this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(existing.x + 1, existing.z)));
          this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(existing.x, existing.z - 1)));
          this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(existing.x, existing.z + 1)));
        }
      }
    }

    // Unload old chunks
    for (const [key, chunk] of this.chunks) {
      const dist = Math.sqrt(
        Math.pow(chunk.x - currentChunkX, 2) + 
        Math.pow(chunk.z - currentChunkZ, 2)
      );

      if (dist > this.renderDistance + 2) { 
        if (chunk.mesh) {
            chunk.mesh.geometry.dispose();
            this.scene.remove(chunk.mesh);
        }
        this.chunks.delete(key);
      }
    }

    if (this.animalManager) {
      this.animalManager.update(dt, { x: playerX, z: playerZ });
    }
  }

  getBlock(x, y, z) {
    const chunkX = Math.floor(x / this.chunkSize);
    const chunkZ = Math.floor(z / this.chunkSize);
    const key = `${chunkX},${chunkZ}`;

    const chunk = this.chunks.get(key);
    if (!chunk) return 0;

    const localX = (x % this.chunkSize + this.chunkSize) % this.chunkSize;
    const localZ = (z % this.chunkSize + this.chunkSize) % this.chunkSize;
    
    return chunk.getBlock(localX, y, localZ);
  }

  setBlock(x, y, z, type, options = {}) {
    const { record = true } = options;
    const chunkX = Math.floor(x / this.chunkSize);
    const chunkZ = Math.floor(z / this.chunkSize);
    const key = this.getChunkKey(chunkX, chunkZ);

    const chunk = this.chunks.get(key);
    if (!chunk) return;

    const localX = (x % this.chunkSize + this.chunkSize) % this.chunkSize;
    const localZ = (z % this.chunkSize + this.chunkSize) % this.chunkSize;

    chunk.setBlock(localX, y, localZ, type);

    if (record) {
      this.recordEdit(chunkX, chunkZ, localX, y, localZ, type);
    }
    
    this.rebuildChunkMesh(chunk);

    // If we changed a block on the chunk border, the neighbor chunk's mesh
    // may also need updating (shared face).
    const atLeft = localX === 0;
    const atRight = localX === this.chunkSize - 1;
    const atBack = localZ === 0;
    const atFront = localZ === this.chunkSize - 1;

    if (atLeft) this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(chunkX - 1, chunkZ)));
    if (atRight) this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(chunkX + 1, chunkZ)));
    if (atBack) this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(chunkX, chunkZ - 1)));
    if (atFront) this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(chunkX, chunkZ + 1)));
  }

  getSurfaceY(x, z) {
    const chunkX = Math.floor(x / this.chunkSize);
    const chunkZ = Math.floor(z / this.chunkSize);
    const key = `${chunkX},${chunkZ}`;

    const chunk = this.chunks.get(key);
    if (!chunk) return null;

    const localX = (x % this.chunkSize + this.chunkSize) % this.chunkSize;
    const localZ = (z % this.chunkSize + this.chunkSize) % this.chunkSize;
    
    return chunk.getSurfaceHeight(localX, localZ);
  }

  raycastAnimal(raycaster) {
    if (!this.animalManager) return null;
    return this.animalManager.raycast(raycaster);
  }

  removeAnimal(animal) {
    if (!this.animalManager || !animal) return;
    this.animalManager.remove(animal);
  }
}
