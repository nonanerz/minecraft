import { createNoise2D, createNoise3D } from 'simplex-noise';

function mulberry32(a) {
  let t = a >>> 0;
  return function () {
    t += 0x6d2b79f5;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

export class SaveManager {
  constructor({ world, player, inventory, dayNightManager, placeableObjects }) {
    this.world = world;
    this.player = player;
    this.inventory = inventory;
    this.dayNightManager = dayNightManager;
    this.placeableObjects = placeableObjects;
    this.storageKey = 'minacraft.save.v1';
  }

  ensureSeed() {
    if (!this.world) return 0;
    if (!this.world.seed || this.world.seed === 0) {
      this.world.seed = (Date.now() ^ (Math.random() * 1e9)) | 0;
    }
    return this.world.seed | 0;
  }

  applySeed(seed) {
    const s = seed | 0;
    if (!this.world) return;
    this.world.seed = s;

    // Deterministic simplex-noise permutations
    const rng2 = mulberry32(s ^ 0x12345678);
    const rng3 = mulberry32(s ^ 0x87654321);
    this.world.noise2D = createNoise2D(rng2);
    this.world.noise3D = createNoise3D(rng3);
  }

  buildSaveObject() {
    const seed = this.ensureSeed();

    return {
      v: 1,
      ts: Date.now(),
      world: {
        seed,
        generationVersion: this.world?.generationVersion ?? 0,
        edits: this.world?.exportEditsForSave ? this.world.exportEditsForSave() : {},
      },
      player: {
        pos: this.player?.body?.position
          ? [this.player.body.position.x, this.player.body.position.y, this.player.body.position.z]
          : [0, 80, 0],
        yaw: this.player?.yaw ?? 0,
        pitch: this.player?.pitch ?? 0,
        health: this.player?.health ?? null,
        hunger: this.player?.hunger ?? null,
      },
      inventory: {
        slots: this.inventory?.slots ?? [],
        hotbarSlot: this.inventory?.hotbarSlot ?? 0,
      },
      time: {
        currentTime: this.dayNightManager?.currentTime ?? null,
      },
      objects: this.placeableObjects?.exportState ? this.placeableObjects.exportState() : [],
    };
  }

  save() {
    const obj = this.buildSaveObject();
    localStorage.setItem(this.storageKey, JSON.stringify(obj));
    return obj;
  }

  load() {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return null;
    const obj = JSON.parse(raw);
    if (!obj || obj.v !== 1) return null;

    // Apply world seed + clear loaded chunks (they will regenerate deterministically)
    this.applySeed(obj.world?.seed ?? 0);

    if (this.world?.clearAllChunks) this.world.clearAllChunks();
    if (this.world?.setEditsFromSave) this.world.setEditsFromSave(obj.world?.edits ?? {});

    // Placeable objects (chests/doors/beds)
    if (this.placeableObjects?.importState) {
      this.placeableObjects.importState(obj.objects ?? []);
    }

    // Restore inventory
    if (this.inventory) {
      this.inventory.slots = Array.isArray(obj.inventory?.slots) ? obj.inventory.slots : new Array(36).fill(null);
      this.inventory.hotbarSlot = obj.inventory?.hotbarSlot ?? 0;
      this.inventory.uiManager?.updateInventoryUI?.();
      this.inventory.uiManager?.updateHotbarSelection?.(this.inventory.hotbarSlot);
    }

    // Restore time
    if (this.dayNightManager && obj.time?.currentTime !== null && obj.time?.currentTime !== undefined) {
      this.dayNightManager.setTime(obj.time.currentTime);
    }

    // Restore player
    if (this.player?.body && Array.isArray(obj.player?.pos)) {
      const [x, y, z] = obj.player.pos;
      this.player.body.position.set(x, y, z);
      this.player.body.velocity.set(0, 0, 0);
    }
    if (this.player) {
      if (typeof obj.player?.yaw === 'number') this.player.yaw = obj.player.yaw;
      if (typeof obj.player?.pitch === 'number') this.player.pitch = obj.player.pitch;
      if (typeof obj.player?.health === 'number') this.player.health = obj.player.health;
      if (typeof obj.player?.hunger === 'number') this.player.hunger = obj.player.hunger;
    }

    // Force initial world load around player
    const px = this.player?.body?.position?.x ?? 0;
    const pz = this.player?.body?.position?.z ?? 0;
    this.world?.update?.(px, pz, 0);

    return obj;
  }

  hasSave() {
    return !!localStorage.getItem(this.storageKey);
  }

  clearSave() {
    localStorage.removeItem(this.storageKey);
  }
}


