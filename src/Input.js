// Manages input state (keyboard and mouse)
export class Input {
  constructor() {
    this.keys = {};
    this.isLocked = false;
    this.allowPointerLock = true;

    document.addEventListener('keydown', (e) => this.onKeyDown(e));
    document.addEventListener('keyup', (e) => this.onKeyUp(e));
    document.addEventListener('pointerlockchange', () => this.onPointerLockChange());
    // Only lock the pointer when clicking the "game world", not the UI.
    document.addEventListener('click', (e) => this.requestLock(e));
  }

  onKeyDown(event) {
    this.keys[event.code] = true;
  }

  onKeyUp(event) {
    this.keys[event.code] = false;
  }

  isKeyDown(code) {
    return !!this.keys[code];
  }

  onPointerLockChange() {
    this.isLocked = document.pointerLockElement === document.body;
  }

  requestLock(event) {
    if (!this.allowPointerLock || this.isLocked) return;
    // Don't steal pointer lock from UI interactions (inventory/hotbar).
    const target = event?.target;
    if (target && target.closest && target.closest('#inventory-screen, #hotbar')) return;
    if (!this.isLocked && this.allowPointerLock) {
      document.body.requestPointerLock();
    }
  }

  setPointerLockEnabled(enabled) {
    this.allowPointerLock = enabled;
    if (!enabled && document.pointerLockElement === document.body) {
      document.exitPointerLock();
    }
  }
}

