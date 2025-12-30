export class Inventory {
  constructor(uiManager) {
    this.slots = new Array(36).fill(null); // 9 hotbar + 27 main
    this.hotbarSlot = 0;
    this.uiManager = uiManager;
  }

  add(type, count = 1, options = {}) {
    const { skipUI = false, durability = null } = options;
    let remaining = count;
    
    const toolInfo = this.uiManager.getToolInfo(type);
    
    // Tools with durability don't stack
    if (toolInfo && durability !== null) {
      for (let i = 0; i < this.slots.length && remaining > 0; i++) {
        if (!this.slots[i]) {
          this.slots[i] = { type, count: 1, durability };
          remaining--;
        }
      }
    } else {
      // Normal stacking behavior for non-tools
      for (let i = 0; i < this.slots.length && remaining > 0; i++) {
        const slot = this.slots[i];
        if (slot && slot.type === type && slot.count < 64 && !slot.durability) {
          const space = 64 - slot.count;
          const toAdd = Math.min(space, remaining);
          slot.count += toAdd;
          remaining -= toAdd;
        }
      }

      for (let i = 0; i < this.slots.length && remaining > 0; i++) {
        if (!this.slots[i]) {
          const put = Math.min(64, remaining);
          this.slots[i] = { type, count: put };
          remaining -= put;
        }
      }
    }

    if (!skipUI) {
      this.uiManager.updateInventoryUI();
    }

    return remaining === 0;
  }

  remove(type, count, options = {}) {
    const { skipUI = false } = options;
    const slot = this.slots[this.hotbarSlot];
    if (slot && slot.type === type) {
      if (slot.count >= count) {
        slot.count -= count;
        if (slot.count === 0) this.slots[this.hotbarSlot] = null;
        if (!skipUI) this.uiManager.updateInventoryUI();
        return true;
      }
    }
    return false;
  }

  consumeSlot(index, amount = 1) {
    const slot = this.slots[index];
    if (!slot || slot.count < amount) return false;
    slot.count -= amount;
    if (slot.count === 0) {
      this.slots[index] = null;
    }
    return true;
  }

  canAdd(type, count = 1) {
    let space = 0;
    for (const slot of this.slots) {
      if (!slot) {
        space += 64;
      } else if (slot.type === type) {
        space += 64 - slot.count;
      }
      if (space >= count) return true;
    }
    return false;
  }

  findHotbarSlotFor(type) {
    let emptyIndex = null;
    for (let i = 0; i < 9; i++) {
      const slot = this.slots[i];
      if (slot && slot.type === type && slot.count < 64) {
        return i;
      }
      if (!slot && emptyIndex === null) {
        emptyIndex = i;
      }
    }
    return emptyIndex;
  }

  findMainSlotFor(type) {
    let emptyIndex = null;
    for (let i = 9; i < 36; i++) {
      const slot = this.slots[i];
      if (slot && slot.type === type && slot.count < 64) {
        return i;
      }
      if (!slot && emptyIndex === null) {
        emptyIndex = i;
      }
    }
    return emptyIndex;
  }

  moveToHotbar(fromIndex) {
    const item = this.slots[fromIndex];
    if (!item) return false;
    const targetIndex = this.findHotbarSlotFor(item.type);
    if (targetIndex === null) return false;

    const target = this.slots[targetIndex];
    const amountToMove = target
      ? Math.min(64 - target.count, item.count)
      : Math.min(64, item.count);

    if (amountToMove === 0) return false;

    if (target) {
      target.count += amountToMove;
    } else {
      this.slots[targetIndex] = { type: item.type, count: amountToMove };
    }

    item.count -= amountToMove;
    if (item.count <= 0) {
      this.slots[fromIndex] = null;
    }

    return true;
  }

  moveToMain(fromIndex) {
    const item = this.slots[fromIndex];
    if (!item) return false;
    const targetIndex = this.findMainSlotFor(item.type);
    if (targetIndex === null) return false;

    const target = this.slots[targetIndex];
    const amountToMove = target
      ? Math.min(64 - target.count, item.count)
      : Math.min(64, item.count);

    if (amountToMove === 0) return false;

    if (target) {
      target.count += amountToMove;
    } else {
      this.slots[targetIndex] = { type: item.type, count: amountToMove };
    }

    item.count -= amountToMove;
    if (item.count <= 0) {
      this.slots[fromIndex] = null;
    }

    return true;
  }

  getSelectedBlock() {
    const slot = this.slots[this.hotbarSlot];
    return slot ? slot.type : 0;
  }

  getSelectedItem() {
    return this.slots[this.hotbarSlot];
  }

  damageTool(amount = 1) {
    const slot = this.slots[this.hotbarSlot];
    if (!slot) return false;
    
    const toolInfo = this.uiManager.getToolInfo(slot.type);
    if (!toolInfo) return false;
    
    if (slot.durability === undefined) {
      slot.durability = toolInfo.maxDurability;
    }
    
    slot.durability -= amount;
    
    if (slot.durability <= 0) {
      this.slots[this.hotbarSlot] = null;
      this.uiManager.updateInventoryUI();
      return true; // Tool broke
    }
    
    this.uiManager.updateInventoryUI();
    return false;
  }

  selectSlot(index) {
    if (index >= 0 && index < 9) {
      this.hotbarSlot = index;
      this.uiManager.updateHotbarSelection(index);
    }
  }
}

