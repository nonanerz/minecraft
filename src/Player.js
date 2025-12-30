import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class Player {
  constructor(scene, camera, physicsWorld, input, world, inventory, handManager, monsterManager = null, placeableObjects = null, dayNightManager = null) {
    this.scene = scene;
    this.camera = camera;
    this.physicsWorld = physicsWorld;
    this.input = input;
    this.world = world;
    this.inventory = inventory;
    this.handManager = handManager;
    this.monsterManager = monsterManager;
    this.placeableObjects = placeableObjects;
    this.dayNightManager = dayNightManager;

    // Physics Body
    // Slightly slimmer + smoother-feeling collision than a raw box.
    // This helps with "sticking" to blocks and makes 1-block gaps behave correctly.
    const radius = 0.35;
    const halfCoreHeight = 0.5; // core box half-height (without the rounded ends)

    this.playerMaterial = new CANNON.Material('player');
    this.blockMaterial = new CANNON.Material('block');

    this.body = new CANNON.Body({
      mass: 70, 
      position: new CANNON.Vec3(0, 80, 0), // Start higher due to increased terrain
      fixedRotation: true,
      material: this.playerMaterial
    });
    // Compound "capsule-ish" body: core box + 2 spheres (top/bottom).
    this.body.addShape(new CANNON.Box(new CANNON.Vec3(radius, halfCoreHeight, radius)));
    this.body.addShape(new CANNON.Sphere(radius), new CANNON.Vec3(0, halfCoreHeight, 0));
    this.body.addShape(new CANNON.Sphere(radius), new CANNON.Vec3(0, -halfCoreHeight, 0));

    this.body.linearDamping = 0.99; // Higher damping for instant stop
    // Reduce friction so the player doesn't feel like it "glues" to blocks.
    this.physicsWorld.addContactMaterial(
      new CANNON.ContactMaterial(this.playerMaterial, this.blockMaterial, {
        friction: 0,
        restitution: 0
      })
    );
    this.physicsWorld.addBody(this.body);

    this.pitch = 0;
    this.yaw = 0;
    
    this.raycaster = new THREE.Raycaster();
    this.raycaster.far = 6; // Longer reach
    
    // Mining system
    this.miningProgress = 0;
    this.miningTarget = null;
    this.isMining = false;
    
    // Mouse state
    this.isLeftMouseDown = false;
    this.isRightMouseDown = false;
    
    // Health and hunger system
    this.maxHealth = 20;
    this.health = 20;
    this.maxHunger = 20;
    this.hunger = 20;
    this.hungerTimer = 0;
    this.regenTimer = 0;
    this.damageFlashTimer = 0;

    document.addEventListener('mousemove', (e) => this.onMouseMove(e));
    document.addEventListener('mousedown', (e) => this.onMouseDown(e));
    document.addEventListener('mouseup', (e) => this.onMouseUp(e));
  }
  
  takeDamage(amount) {
    this.health = Math.max(0, this.health - amount);
    this.damageFlashTimer = 0.3; // Flash screen red
    
    // Update UI
    if (this.updateHealthUI) {
      this.updateHealthUI();
    }
    
    // Death
    if (this.health <= 0) {
      this.onDeath();
    }
  }
  
  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
    if (this.updateHealthUI) {
      this.updateHealthUI();
    }
  }
  
  eat(hungerAmount, healAmount = 0) {
    this.hunger = Math.min(this.maxHunger, this.hunger + hungerAmount);
    if (healAmount > 0) {
      this.heal(healAmount);
    }
    if (this.updateHealthUI) {
      this.updateHealthUI();
    }
  }
  
  onDeath() {
    console.log('Гравець помер!');
    // Respawn
    this.health = this.maxHealth;
    this.hunger = this.maxHunger;
    this.body.position.set(0, 80, 0);
    this.body.velocity.set(0, 0, 0);
    if (this.updateHealthUI) {
      this.updateHealthUI();
    }
  }
  
  getFoodValue(itemType) {
    // Returns {hunger, heal} or null if not food
    const foodTypes = {
      11: { hunger: 3, heal: 0, name: "Сире м'ясо" },        // Raw Meat
      16: { hunger: 8, heal: 4, name: "Смажене м'ясо" },     // Cooked Meat
      17: { hunger: 5, heal: 2, name: 'Хліб' },              // Bread
    };
    
    return foodTypes[itemType] || null;
  }
  
  showMessage(text) {
    // Show a message to the player
    let messageEl = document.getElementById('player-message');
    if (!messageEl) {
      messageEl = document.createElement('div');
      messageEl.id = 'player-message';
      messageEl.style.position = 'fixed';
      messageEl.style.top = '50%';
      messageEl.style.left = '50%';
      messageEl.style.transform = 'translate(-50%, -100px)';
      messageEl.style.background = 'rgba(0, 0, 0, 0.8)';
      messageEl.style.color = 'white';
      messageEl.style.padding = '12px 24px';
      messageEl.style.borderRadius = '8px';
      messageEl.style.fontSize = '16px';
      messageEl.style.fontWeight = 'bold';
      messageEl.style.pointerEvents = 'none';
      messageEl.style.zIndex = '1001';
      messageEl.style.display = 'none';
      document.body.appendChild(messageEl);
    }
    
    messageEl.textContent = text;
    messageEl.style.display = 'block';
    
    // Hide after 2 seconds
    setTimeout(() => {
      messageEl.style.display = 'none';
    }, 2000);
  }

  onMouseMove(event) {
    if (!this.input.isLocked) return;
    const sensitivity = 0.002;
    this.yaw -= event.movementX * sensitivity;
    this.pitch -= event.movementY * sensitivity;
    this.pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.pitch));
    
    const quaternion = new THREE.Quaternion();
    quaternion.setFromEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ'));
    this.camera.quaternion.copy(quaternion);
  }

  getBlockHardness(blockType) {
    const hardness = {
      0: 0,     // Air
      1: 0.5,   // Dirt
      2: 0.6,   // Grass
      3: 1.5,   // Stone
      4: 2.0,   // Log
      5: 0.5,   // Sand
      6: 0,     // Water (can't break)
      7: 0.2,   // Leaves
      8: 2.0,   // Plank
      9: -1,    // Bedrock (unbreakable)
      40: 3.0,  // Coal Ore
      41: 3.0,  // Iron Ore
      44: 2.0   // Cobblestone
    };
    return hardness[blockType] !== undefined ? hardness[blockType] : 1.0;
  }

  getBlockToolType(blockType) {
    // What tool is best for this block
    const toolTypes = {
      1: 'shovel',  // Dirt
      2: 'shovel',  // Grass
      3: 'pickaxe', // Stone
      4: 'axe',     // Log
      5: 'shovel',  // Sand
      99: 'any',     // Leaves
      8: 'axe',     // Plank
      40: 'pickaxe', // Coal
      41: 'pickaxe', // Iron Ore
      44: 'pickaxe'  // Cobblestone
    };
    if (blockType === 7) return 'any'; // Leaves
    return toolTypes[blockType] || 'any';
  }

  getBlockMinTier(blockType) {
    // Minimum tool tier required to harvest this block
    const minTiers = {
      3: 'wood',   // Stone requires at least wooden pickaxe
      40: 'wood',  // Coal Ore
      41: 'stone', // Iron Ore requires stone pickaxe
      43: 'iron',  // Diamond Ore requires iron pickaxe
      44: 'wood'   // Cobblestone
    };
    return minTiers[blockType] || null;
  }

  canHarvestBlock(blockType, tool) {
    const minTier = this.getBlockMinTier(blockType);
    if (!minTier) return true; // No requirement
    
    if (!tool) return false; // Need a tool
    
    const tierOrder = ['wood', 'stone', 'iron', 'diamond'];
    const toolTierIndex = tierOrder.indexOf(tool.tier.name || tool.tier); // handle object or string
    const minTierIndex = tierOrder.indexOf(minTier);
    
    return toolTierIndex >= minTierIndex;
  }

  calculateMiningTime(blockType, tool) {
    const hardness = this.getBlockHardness(blockType);
    if (hardness <= 0) return 0;
    if (hardness < 0) return Infinity; // Unbreakable
    
    const bestToolType = this.getBlockToolType(blockType);
    let speedMultiplier = 1;
    
    if (tool) {
      // Check if using the right tool
      if (bestToolType === 'any' || tool.type === bestToolType) {
        // speed comes from tool definition in UIManager or ItemData
        // ItemData defines definitions but not speed directly yet, let's look at UIManager or assume basic values
        // or check if tool object has speed.
        // The tool object passed here is from ItemData definition usually.
        // We need to map material to speed.
        const speeds = { wood: 2, stone: 4, iron: 6, diamond: 8 };
        const tierName = tool.tier.name || tool.tier;
        speedMultiplier = speeds[tierName] || 1;
      } else {
        speedMultiplier = 1; // Wrong tool = hand speed
      }
    }
    
    // Base mining time formula (similar to Minecraft)
    const baseTime = hardness * 1.5;
    return baseTime / speedMultiplier;
  }

  onMouseDown(event) {
    if (!this.input.isLocked) return;

    if (event.button === 0) {
        this.isLeftMouseDown = true;
        
        // Attack logic (instant hit on click)
        this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
        
        // Check for placeable object hit first (for breaking)
        if (this.placeableObjects) {
          const objectHit = this.placeableObjects.raycastObject(this.raycaster);
          if (objectHit) {
            // Trigger swing instantly for feedback
            if (this.handManager) this.handManager.startSwing();
            
            // Break the object and drop it
            this.placeableObjects.removeObject(objectHit.position.x, objectHit.position.y, objectHit.position.z);
            this.inventory.add(objectHit.type, 1);
            return;
          }
        }
        
        // Check for monster hit
        if (this.monsterManager) {
          const monsterHit = this.monsterManager.raycastMonster(this.raycaster);
          if (monsterHit) {
            // Trigger swing instantly for feedback
            if (this.handManager) this.handManager.startSwing();
            
            // Calculate damage based on held item
            const selectedItem = this.inventory.getSelectedItem();
            let damage = 1; // Base fist damage
            
            if (selectedItem) {
              const toolInfo = this.inventory.uiManager.getToolInfo(selectedItem.type);
              if (toolInfo) {
                // Swords do most damage
                if (toolInfo.type === 'sword') {
                  const swordDamage = { wood: 5, stone: 6, iron: 7, diamond: 8 };
                  const tierName = toolInfo.tier?.name || toolInfo.tier || 'wood';
                  damage = swordDamage[tierName] || 5;
                } else if (toolInfo.type === 'axe') {
                  // Axes do decent damage
                  const axeDamage = { wood: 4, stone: 5, iron: 6, diamond: 7 };
                  const tierName = toolInfo.tier?.name || toolInfo.tier || 'wood';
                  damage = axeDamage[tierName] || 4;
                } else {
                  // Other tools do minimal damage
                  damage = 2;
                }
              }
            }
            
            this.monsterManager.damageMonster(monsterHit, damage);
            
            // Drop items if monster died
            if (monsterHit.health <= 0 && monsterHit.profile?.drop) {
              this.inventory.add(monsterHit.profile.drop.type, monsterHit.profile.drop.count);
            }
            
            return; // Don't check for animals or blocks
          }
        }
        
        // Check for animal hit
        const animalHit = this.world.raycastAnimal(this.raycaster);
        if (animalHit) {
            // Trigger swing instantly for feedback
            if (this.handManager) this.handManager.startSwing();
            
            this.world.removeAnimal(animalHit);
            if (animalHit.profile?.drop) {
                this.inventory.add(animalHit.profile.drop.type, animalHit.profile.drop.count);
            }
        }
    } else if (event.button === 2) {
        this.isRightMouseDown = true;
        
        // Check for interaction with placeable objects first
        this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
        
        if (this.placeableObjects) {
            const objectHit = this.placeableObjects.raycastObject(this.raycaster);
            if (objectHit) {
                // Interact with object
                if (objectHit.type === 72) {
                    // Door - toggle
                    this.placeableObjects.toggleDoor(objectHit.position.x, objectHit.position.y, objectHit.position.z);
                    return;
                } else if (objectHit.type === 70) {
                    // Bed - sleep
                    if (this.dayNightManager && this.dayNightManager.isNight()) {
                        this.placeableObjects.sleep(this.dayNightManager);
                        this.showMessage('Ви прокинулись!');
                    } else {
                        this.showMessage('Можна спати тільки вночі');
                    }
                    return;
                } else if (objectHit.type === 71) {
                    // Chest - open UI
                    if (this.openChest) {
                        this.openChest(objectHit);
                    }
                    return;
                }
            }
        }
        
        // Check if holding food
        const selectedItem = this.inventory.getSelectedItem();
        if (selectedItem) {
            const foodValue = this.getFoodValue(selectedItem.type);
            if (foodValue) {
                // Eat food
                if (this.hunger < this.maxHunger) {
                    this.eat(foodValue.hunger, foodValue.heal);
                    this.inventory.remove(selectedItem.type, 1);
                    
                    // Play eating sound/animation
                    if (this.handManager) {
                        this.handManager.startSwing();
                    }
                }
                return; // Don't place blocks if eating
            }
        }
        
        // Place block logic (single interaction)
        const hit = this.raycastBlockVoxel(this.raycaster.far);
        if (hit) {
            const x = hit.x + hit.normal.x;
            const y = hit.y + hit.normal.y;
            const z = hit.z + hit.normal.z;
            
            const typeToPlace = this.inventory.getSelectedBlock();
            
            // Check if it's a special placeable object
            if (typeToPlace >= 70 && typeToPlace <= 72) {
                // Special objects (bed, chest, door)
                if (this.placeableObjects) {
                    // Only place into empty space
                    if (this.world.getBlock(x, y, z) !== 0) return;
                    
                    // Check if position is not occupied by another object
                    if (this.placeableObjects.isPositionOccupied(x, y, z)) return;
                    
                    // For doors, check top block too
                    if (typeToPlace === 72) {
                        if (this.world.getBlock(x, y + 1, z) !== 0) return;
                        if (this.placeableObjects.isPositionOccupied(x, y + 1, z)) return;
                    }
                    
                    // Calculate rotation based on player facing direction
                    const rotation = Math.round(this.yaw / (Math.PI / 2)) * (Math.PI / 2);
                    
                    if (this.inventory.remove(typeToPlace, 1)) {
                        const placed = this.placeableObjects.placeObject(typeToPlace, x, y, z, rotation);
                        if (placed) {
                            // Swing hand
                            if (this.handManager) this.handManager.startSwing();
                        } else {
                            // Give item back if placement failed
                            this.inventory.add(typeToPlace, 1);
                        }
                    }
                }
            } else {
                // Regular blocks: 1-15, 40-44
                const isBlock = (typeToPlace >= 1 && typeToPlace <= 15) || 
                                (typeToPlace >= 40 && typeToPlace <= 44);
                if (isBlock) {
                    // Only place into empty space
                    if (this.world.getBlock(x, y, z) !== 0) return;
                    if (this.inventory.remove(typeToPlace, 1)) {
                        this.world.setBlock(x, y, z, typeToPlace);
                        // Swing hand
                        if (this.handManager) this.handManager.startSwing();
                    }
                }
            }
        }
    }
  }

  onMouseUp(event) {
    if (event.button === 0) {
      this.isLeftMouseDown = false;
      this.isMining = false;
      this.miningProgress = 0;
      this.miningTarget = null;
      this.updateMiningIndicator(0);
    }
    if (event.button === 2) {
        this.isRightMouseDown = false;
    }
  }

  update(dt) {
    // Update hand animation
    if (this.handManager) {
      const selectedItem = this.inventory.getSelectedItem();
      this.handManager.update(dt, selectedItem);
    }

    // Handle interactions (Mining / Swinging)
    if (this.isLeftMouseDown) {
        // Continuous swing
        if (this.handManager && !this.handManager.isSwinging) {
            this.handManager.startSwing();
        }

        // Mining logic
        const hit = this.raycastBlockVoxel(this.raycaster.far);
        if (hit) {
            const x = hit.x;
            const y = hit.y;
            const z = hit.z;
            const blockType = this.world.getBlock(x, y, z);

            if (blockType !== 0 && blockType !== 9) { // Not air, not bedrock
                // Check if target changed
                if (!this.miningTarget || this.miningTarget.x !== x || this.miningTarget.y !== y || this.miningTarget.z !== z) {
                    this.miningTarget = { x, y, z, blockType };
                    this.miningProgress = 0;
                    this.isMining = true;
                }

                const selectedItem = this.inventory.getSelectedItem();
                const tool = selectedItem ? this.inventory.uiManager.getToolInfo(selectedItem.type) : null;
                const miningTime = this.calculateMiningTime(blockType, tool);

                if (miningTime === Infinity) {
                    this.miningProgress = 0;
                } else {
                    this.miningProgress += dt;
                    this.updateMiningIndicator(this.miningProgress / miningTime);

                    if (this.miningProgress >= miningTime) {
                        // Break block
                        const canHarvest = this.canHarvestBlock(blockType, tool);
                        
                        if (canHarvest) {
                            let dropType = blockType;
                            let dropCount = 1;
                            
                            if (blockType === 2) dropType = 1; // Grass -> Dirt
                            if (blockType === 3) dropType = 44; // Stone -> Cobblestone
                            if (blockType === 7 && Math.random() > 0.3) dropCount = 0;
                            if (blockType === 40) dropType = 40;
                            if (blockType === 41) dropType = 41;
                            if (blockType === 43) dropType = 43;

                            if (dropCount > 0) {
                                this.inventory.add(dropType, dropCount);
                            }
                        }

                        this.world.setBlock(x, y, z, 0);

                        if (tool) {
                            this.inventory.damageTool(1);
                        }

                        // Reset progress but keep mining if mouse is still down (will pick new target next frame)
                        this.miningProgress = 0;
                        this.miningTarget = null;
                        this.isMining = false;
                        this.updateMiningIndicator(0);
                    }
                }
            } else {
                this.isMining = false;
                this.miningProgress = 0;
                this.updateMiningIndicator(0);
            }
        } else {
            this.isMining = false;
            this.miningProgress = 0;
            this.updateMiningIndicator(0);
        }
    } else {
        // Just to be safe
        if (this.isMining) {
             this.isMining = false;
             this.miningProgress = 0;
             this.updateMiningIndicator(0);
        }
    }
    
    // Jump
    if (this.input.isKeyDown('Space')) {
        if (Math.abs(this.body.velocity.y) < 0.1) {
            this.body.velocity.y = 12;
        }
    }

    const inputVector = new THREE.Vector3(
        (this.input.isKeyDown('KeyD') ? 1 : 0) - (this.input.isKeyDown('KeyA') ? 1 : 0),
        0,
        (this.input.isKeyDown('KeyS') ? 1 : 0) - (this.input.isKeyDown('KeyW') ? 1 : 0)
    );

    const isSprinting =
        this.input.isKeyDown('ShiftLeft') || this.input.isKeyDown('ShiftRight');
    const baseSpeed = 10;
    const speed = isSprinting ? baseSpeed * 1.6 : baseSpeed;

    const targetVel = new THREE.Vector3();
    if (inputVector.lengthSq() > 0) {
        const direction = inputVector
            .clone()
            .normalize()
            .applyEuler(new THREE.Euler(0, this.yaw, 0));
        targetVel.copy(direction).multiplyScalar(speed);
    }

    this.body.velocity.x = THREE.MathUtils.lerp(this.body.velocity.x, targetVel.x, 0.3);
    this.body.velocity.z = THREE.MathUtils.lerp(this.body.velocity.z, targetVel.z, 0.3);

    const desiredCamera = new THREE.Vector3().copy(this.body.position).add(new THREE.Vector3(0, 0.9, 0));
    this.camera.position.lerp(desiredCamera, 0.4);
    
    // Hunger system
    this.hungerTimer += dt;
    if (this.hungerTimer >= 10) { // Lose hunger every 10 seconds (was 4)
      this.hunger = Math.max(0, this.hunger - 0.5);
      this.hungerTimer = 0;
      
      if (this.updateHealthUI) {
        this.updateHealthUI();
      }
      
      // Take damage if hungry
      if (this.hunger <= 0) {
        this.takeDamage(1);
      }
    }
    
    // Health regeneration when well-fed
    if (this.hunger >= 18 && this.health < this.maxHealth) {
      this.regenTimer += dt;
      if (this.regenTimer >= 4) { // Regenerate every 4 seconds
        this.heal(1);
        this.hunger = Math.max(0, this.hunger - 1); // Cost hunger
        this.regenTimer = 0;
      }
    }
    
    // Damage flash effect
    if (this.damageFlashTimer > 0) {
      this.damageFlashTimer -= dt;
      this.updateDamageFlash();
    }
    
    // Update food indicator
    this.updateFoodIndicator();
    
    this.updatePhysicsColliders();
  }
  
  updateFoodIndicator() {
    let indicator = document.getElementById('food-indicator');
    
    const selectedItem = this.inventory.getSelectedItem();
    const foodValue = selectedItem ? this.getFoodValue(selectedItem.type) : null;
    
    if (foodValue && this.hunger < this.maxHunger) {
      // Show food indicator
      if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'food-indicator';
        indicator.style.position = 'fixed';
        indicator.style.bottom = '80px';
        indicator.style.left = '50%';
        indicator.style.transform = 'translateX(-50%)';
        indicator.style.background = 'rgba(0, 0, 0, 0.7)';
        indicator.style.color = 'white';
        indicator.style.padding = '8px 16px';
        indicator.style.borderRadius = '5px';
        indicator.style.fontSize = '14px';
        indicator.style.pointerEvents = 'none';
        indicator.style.zIndex = '1000';
        document.body.appendChild(indicator);
      }
      
      indicator.style.display = 'block';
      indicator.textContent = `🍖 ПКМ для їжі: +${foodValue.hunger} голоду${foodValue.heal > 0 ? `, +${foodValue.heal} HP` : ''}`;
    } else {
      if (indicator) {
        indicator.style.display = 'none';
      }
    }
  }
  
  updateDamageFlash() {
    // Flash screen red when damaged
    const overlay = document.getElementById('damage-overlay');
    if (!overlay) {
      const div = document.createElement('div');
      div.id = 'damage-overlay';
      div.style.position = 'fixed';
      div.style.top = '0';
      div.style.left = '0';
      div.style.width = '100%';
      div.style.height = '100%';
      div.style.backgroundColor = 'rgba(255, 0, 0, 0)';
      div.style.pointerEvents = 'none';
      div.style.zIndex = '999';
      document.body.appendChild(div);
      return;
    }
    
    const opacity = Math.max(0, this.damageFlashTimer / 0.3) * 0.4;
    overlay.style.backgroundColor = `rgba(255, 0, 0, ${opacity})`;
  }

  // Robust voxel raycast: fixes cases where you collide with a block that isn't rendered
  // (so mesh-raycast can't hit it -> "unbreakable invisible blocks").
  raycastBlockVoxel(maxDistance = 6) {
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    const origin = this.raycaster.ray.origin;
    const dir = this.raycaster.ray.direction;

    // Current voxel
    let x = Math.floor(origin.x);
    let y = Math.floor(origin.y);
    let z = Math.floor(origin.z);

    const stepX = dir.x > 0 ? 1 : dir.x < 0 ? -1 : 0;
    const stepY = dir.y > 0 ? 1 : dir.y < 0 ? -1 : 0;
    const stepZ = dir.z > 0 ? 1 : dir.z < 0 ? -1 : 0;

    const intBound = (s, ds) => {
      if (ds === 0) return Infinity;
      const sIsInteger = Math.floor(s) === s;
      if (ds > 0) {
        return ((sIsInteger ? 0 : 1) + Math.floor(s) - s) / ds + 1e-9;
      }
      return (s - Math.floor(s)) / (-ds) + 1e-9;
    };

    let tMaxX = intBound(origin.x, dir.x);
    let tMaxY = intBound(origin.y, dir.y);
    let tMaxZ = intBound(origin.z, dir.z);

    const tDeltaX = stepX === 0 ? Infinity : Math.abs(1 / dir.x);
    const tDeltaY = stepY === 0 ? Infinity : Math.abs(1 / dir.y);
    const tDeltaZ = stepZ === 0 ? Infinity : Math.abs(1 / dir.z);

    // If we start inside a solid block, still allow targeting it
    const startType = this.world.getBlock(x, y, z);
    if (startType !== 0 && startType !== 6 && startType !== 15) {
      return { x, y, z, normal: { x: 0, y: 0, z: 0 } };
    }

    let dist = 0;
    let lastStepAxis = null; // 'x'|'y'|'z'

    while (dist <= maxDistance) {
      if (tMaxX < tMaxY) {
        if (tMaxX < tMaxZ) {
          x += stepX;
          dist = tMaxX;
          tMaxX += tDeltaX;
          lastStepAxis = 'x';
        } else {
          z += stepZ;
          dist = tMaxZ;
          tMaxZ += tDeltaZ;
          lastStepAxis = 'z';
        }
      } else {
        if (tMaxY < tMaxZ) {
          y += stepY;
          dist = tMaxY;
          tMaxY += tDeltaY;
          lastStepAxis = 'y';
        } else {
          z += stepZ;
          dist = tMaxZ;
          tMaxZ += tDeltaZ;
          lastStepAxis = 'z';
        }
      }

      const type = this.world.getBlock(x, y, z);
      // Ignore liquids for targeting (so you can mine/place against solid blocks behind them)
      if (type !== 0 && type !== 6 && type !== 15) {
        const normal = { x: 0, y: 0, z: 0 };
        if (lastStepAxis === 'x') normal.x = -stepX;
        if (lastStepAxis === 'y') normal.y = -stepY;
        if (lastStepAxis === 'z') normal.z = -stepZ;
        return { x, y, z, normal };
      }
    }
    return null;
  }

  updateMiningIndicator(progress) {
    let indicator = document.getElementById('mining-progress');
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.id = 'mining-progress';
      indicator.style.position = 'fixed';
      indicator.style.top = '50%';
      indicator.style.left = '50%';
      indicator.style.transform = 'translate(-50%, 60px)';
      indicator.style.width = '200px';
      indicator.style.height = '20px';
      indicator.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      indicator.style.border = '2px solid #fff';
      indicator.style.display = 'none';
      indicator.style.zIndex = '1000';
      
      const fill = document.createElement('div');
      fill.id = 'mining-progress-fill';
      fill.style.height = '100%';
      fill.style.backgroundColor = '#4caf50';
      fill.style.width = '0%';
      fill.style.transition = 'width 0.1s';
      
      indicator.appendChild(fill);
      document.body.appendChild(indicator);
    }
    
    const fill = document.getElementById('mining-progress-fill');
    if (progress > 0) {
      indicator.style.display = 'block';
      fill.style.width = `${Math.min(progress * 100, 100)}%`;
    } else {
      indicator.style.display = 'none';
      fill.style.width = '0%';
    }
  }

  updatePhysicsColliders() {
    const boxSize = 2; 
    const px = Math.floor(this.body.position.x);
    const py = Math.floor(this.body.position.y);
    const pz = Math.floor(this.body.position.z);
    
    if (!this.colliderMap) this.colliderMap = new Map();
    const neededKeys = new Set();
    
    for (let x = px - boxSize; x <= px + boxSize; x++) {
        for (let y = py - boxSize; y <= py + boxSize; y++) {
            for (let z = pz - boxSize; z <= pz + boxSize; z++) {
                const block = this.world.getBlock(x, y, z);
                // 0: Air, 6: Water, 7: Leaves, 15: Lava should not block movement.
                if (block !== 0 && block !== 6 && block !== 7 && block !== 15) { 
                    const key = `${x},${y},${z}`;
                    neededKeys.add(key);
                    
                    if (!this.colliderMap.has(key)) {
                        const body = new CANNON.Body({
                            mass: 0,
                            position: new CANNON.Vec3(x + 0.5, y + 0.5, z + 0.5),
                            shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)),
                            material: this.blockMaterial
                        });
                        this.physicsWorld.addBody(body);
                        this.colliderMap.set(key, body);
                    }
                }
            }
        }
    }
    
    for (const [key, body] of this.colliderMap) {
        if (!neededKeys.has(key)) {
            this.physicsWorld.removeBody(body);
            this.colliderMap.delete(key);
        }
    }
  }
}
