import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class MonsterManager {
  constructor(scene, physicsWorld, world) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.world = world;
    this.monsters = [];
    this.maxMonsters = 15; // Reduced from 20
    this.spawnRadius = 25; // Closer spawn (was 40)
    this.minSpawnDistance = 10; // Closer minimum (was 15)
    this.spawnTimer = 0;
    this.spawnInterval = 2; // seconds - more frequent spawning
    
    // Setup materials for collision
    this.monsterMaterial = new CANNON.Material('monster');
    this.blockMaterial = new CANNON.Material('block');
    
    // Contact material between monster and blocks
    this.physicsWorld.addContactMaterial(
      new CANNON.ContactMaterial(this.monsterMaterial, this.blockMaterial, {
        friction: 0.3,
        restitution: 0
      })
    );
  }
    
    this.monsterTypes = {
      zombie: {
        name: 'Зомбі',
        health: 20,
        damage: 3,
        speed: 2.5,
        color: 0x3d6026, // Darker green
        headColor: 0x4d7036,
        drop: { type: 11, count: 1 } // Raw meat
      },
      skeleton: {
        name: 'Скелет',
        health: 15,
        damage: 2,
        speed: 3,
        color: 0xdddddd, // Lighter for visibility
        headColor: 0xffffff,
        drop: { type: 13, count: 2 } // Feathers
      },
      creeper: {
        name: 'Кріпер',
        health: 20,
        damage: 25, // Explosion damage
        speed: 2.5,
        color: 0x0fa70f, // Brighter green
        headColor: 0x0fa70f,
        explodes: true,
        drop: { type: 40, count: 1 } // Coal (gunpowder in real MC)
      }
    };
  }

  spawnMonster(type, position) {
    const profile = this.monsterTypes[type];
    if (!profile) return null;
    
    // Create mesh
    const group = new THREE.Group();
    
    // Body
    const bodyGeometry = new THREE.BoxGeometry(0.6, 1.2, 0.3);
    const bodyMaterial = new THREE.MeshLambertMaterial({ color: profile.color });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.6;
    body.castShadow = true;
    group.add(body);
    
    // Head
    const headGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const headMaterial = new THREE.MeshLambertMaterial({ color: profile.headColor });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.45;
    head.castShadow = true;
    group.add(head);
    
    // Eyes (for all monsters - makes them more visible)
    const eyeGeometry = new THREE.BoxGeometry(0.12, 0.12, 0.05);
    let eyeColor = 0xff0000; // Default red
    
    if (type === 'creeper') {
      eyeColor = 0x000000; // Black for creeper
    } else if (type === 'skeleton') {
      eyeColor = 0x000000; // Black for skeleton
    }
    
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: eyeColor }); // Basic material for glow effect
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.15, 1.55, 0.26);
    group.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.15, 1.55, 0.26);
    group.add(rightEye);
    
    // Arms
    const armGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.3);
    const leftArm = new THREE.Mesh(armGeometry, bodyMaterial);
    leftArm.position.set(-0.45, 0.8, 0);
    leftArm.castShadow = true;
    group.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeometry, bodyMaterial);
    rightArm.position.set(0.45, 0.8, 0);
    rightArm.castShadow = true;
    group.add(rightArm);
    
    // Legs
    const legGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.3);
    const leftLeg = new THREE.Mesh(legGeometry, bodyMaterial);
    leftLeg.position.set(-0.15, 0, 0);
    leftLeg.castShadow = true;
    group.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeometry, bodyMaterial);
    rightLeg.position.set(0.15, 0, 0);
    rightLeg.castShadow = true;
    group.add(rightLeg);
    
    group.position.copy(position);
    this.scene.add(group);
    
    // Physics body
    const shape = new CANNON.Box(new CANNON.Vec3(0.3, 0.9, 0.15));
    const body_physics = new CANNON.Body({
      mass: 80, // Heavier to prevent bouncing
      position: new CANNON.Vec3(position.x, position.y + 0.9, position.z),
      shape: shape,
      linearDamping: 0.9,
      angularDamping: 0.99,
      fixedRotation: true,
      material: this.monsterMaterial
    });
    this.physicsWorld.addBody(body_physics);
    
    const monster = {
      type,
      profile,
      mesh: group,
      body: body_physics,
      health: profile.health,
      maxHealth: profile.health,
      target: null,
      attackCooldown: 0,
      explodeTimer: -1, // For creeper
      animationTime: Math.random() * Math.PI * 2,
      bodyParts: { body, head, leftArm, rightArm, leftLeg, rightLeg },
      colliderMap: new Map() // For block collisions
    };
    
    this.monsters.push(monster);
    return monster;
  }

  update(dt, player, dayNightManager) {
    // Spawn monsters at night
    if (dayNightManager && dayNightManager.isDark()) {
      this.spawnTimer += dt;
      if (this.spawnTimer >= this.spawnInterval && this.monsters.length < this.maxMonsters) {
        this.trySpawnMonster(player);
        this.spawnTimer = 0;
      }
    }
    
    // Update all monsters
    for (let i = this.monsters.length - 1; i >= 0; i--) {
      const monster = this.monsters[i];
      
      // Remove dead monsters
      if (monster.health <= 0) {
        this.removeMonster(i);
        continue;
      }
      
      // Remove monsters that fall too far
      if (monster.body.position.y < -50) {
        this.removeMonster(i);
        continue;
      }
      
      // Update collisions with blocks
      this.updateMonsterColliders(monster);
      
      // Update AI
      this.updateMonsterAI(monster, player, dt);
      
      // Update mesh position
      monster.mesh.position.set(
        monster.body.position.x,
        monster.body.position.y - 0.9,
        monster.body.position.z
      );
      
      // Update animation
      this.updateMonsterAnimation(monster, dt);
      
      // Look at player
      if (monster.target) {
        const direction = new THREE.Vector3(
          player.body.position.x - monster.body.position.x,
          0,
          player.body.position.z - monster.body.position.z
        );
        const angle = Math.atan2(direction.x, direction.z);
        monster.mesh.rotation.y = angle;
      }
    }
  }

  trySpawnMonster(player) {
    // Try multiple times to find a good spawn position
    for (let attempt = 0; attempt < 10; attempt++) {
      // Random position around player
      const angle = Math.random() * Math.PI * 2;
      const distance = this.minSpawnDistance + Math.random() * (this.spawnRadius - this.minSpawnDistance);
      
      const x = player.body.position.x + Math.cos(angle) * distance;
      const z = player.body.position.z + Math.sin(angle) * distance;
      
      // Get surface Y - find the highest solid block
      let y = null;
      for (let checkY = Math.floor(player.body.position.y) + 20; checkY >= Math.floor(player.body.position.y) - 10; checkY--) {
        const block = this.world.getBlock(Math.floor(x), checkY, Math.floor(z));
        const blockAbove = this.world.getBlock(Math.floor(x), checkY + 1, Math.floor(z));
        const blockAbove2 = this.world.getBlock(Math.floor(x), checkY + 2, Math.floor(z));
        
        // Found solid ground with 2 air blocks above
        if (block !== 0 && block !== 6 && block !== 15 && // Solid ground, not water/lava
            blockAbove === 0 && blockAbove2 === 0) { // Air above
          y = checkY;
          break;
        }
      }
      
      if (y === null) continue;
      
      // Check if position is valid (not in water, not too high/low difference from player)
      const blockBelow = this.world.getBlock(Math.floor(x), y, Math.floor(z));
      if (blockBelow === 6 || blockBelow === 15) continue; // Not on water or lava
      
      // Don't spawn too far vertically from player
      if (Math.abs(y - player.body.position.y) > 15) continue;
      
      // Random monster type
      const types = Object.keys(this.monsterTypes);
      const type = types[Math.floor(Math.random() * types.length)];
      
      this.spawnMonster(type, new THREE.Vector3(x, y + 1.5, z));
      console.log(`✅ Заспавнено ${type} на (${Math.floor(x)}, ${y}, ${Math.floor(z)}) - відстань від гравця: ${distance.toFixed(1)}`);
      return;
    }
    
    console.log('❌ Не вдалося знайти місце для спавну монстра');
  }

  updateMonsterAI(monster, player, dt) {
    const distance = new THREE.Vector3(
      player.body.position.x - monster.body.position.x,
      player.body.position.y - monster.body.position.y,
      player.body.position.z - monster.body.position.z
    );
    
    const distanceFlat = Math.sqrt(distance.x * distance.x + distance.z * distance.z);
    
    // Detect player within range
    if (distanceFlat < 30) {
      monster.target = player;
      
      // Creeper explosion logic
      if (monster.profile.explodes && distanceFlat < 3) {
        if (monster.explodeTimer < 0) {
          monster.explodeTimer = 1.5; // 1.5 seconds to explode
        } else {
          monster.explodeTimer -= dt;
          
          // Flash effect
          const flash = Math.sin(monster.explodeTimer * 20) > 0;
          monster.bodyParts.body.material.color.setHex(flash ? 0xffffff : monster.profile.color);
          
          if (monster.explodeTimer <= 0) {
            this.explodeCreeper(monster, player);
            return;
          }
        }
      } else {
        monster.explodeTimer = -1;
      }
      
      // Move towards player
      if (distanceFlat > 2) {
        distance.normalize();
        const velocity = new CANNON.Vec3(
          distance.x * monster.profile.speed,
          monster.body.velocity.y,
          distance.z * monster.profile.speed
        );
        monster.body.velocity.x = velocity.x;
        monster.body.velocity.z = velocity.z;
      } else {
        // Attack
        monster.attackCooldown -= dt;
        if (monster.attackCooldown <= 0) {
          this.attackPlayer(monster, player);
          monster.attackCooldown = 1.5; // Attack every 1.5 seconds
        }
      }
    } else {
      monster.target = null;
      // Stop moving
      monster.body.velocity.x *= 0.9;
      monster.body.velocity.z *= 0.9;
    }
  }

  updateMonsterAnimation(monster, dt) {
    monster.animationTime += dt * 3;
    
    // Walking animation
    const moving = Math.abs(monster.body.velocity.x) > 0.1 || Math.abs(monster.body.velocity.z) > 0.1;
    
    if (moving) {
      const swing = Math.sin(monster.animationTime) * 0.5;
      monster.bodyParts.leftArm.rotation.x = swing;
      monster.bodyParts.rightArm.rotation.x = -swing;
      monster.bodyParts.leftLeg.rotation.x = -swing;
      monster.bodyParts.rightLeg.rotation.x = swing;
    } else {
      // Reset to neutral
      monster.bodyParts.leftArm.rotation.x *= 0.9;
      monster.bodyParts.rightArm.rotation.x *= 0.9;
      monster.bodyParts.leftLeg.rotation.x *= 0.9;
      monster.bodyParts.rightLeg.rotation.x *= 0.9;
    }
  }

  attackPlayer(monster, player) {
    if (!player.takeDamage) return;
    
    player.takeDamage(monster.profile.damage);
    
    // Knockback
    const direction = new THREE.Vector3(
      player.body.position.x - monster.body.position.x,
      0.5,
      player.body.position.z - monster.body.position.z
    ).normalize();
    
    player.body.velocity.x += direction.x * 5;
    player.body.velocity.y += direction.y * 5;
    player.body.velocity.z += direction.z * 5;
  }

  explodeCreeper(monster, player) {
    // Damage player if close
    const distance = Math.sqrt(
      Math.pow(player.body.position.x - monster.body.position.x, 2) +
      Math.pow(player.body.position.z - monster.body.position.z, 2)
    );
    
    if (distance < 5) {
      const damage = monster.profile.damage * (1 - distance / 5);
      if (player.takeDamage) {
        player.takeDamage(damage);
      }
    }
    
    // Destroy blocks around
    const x = Math.floor(monster.body.position.x);
    const y = Math.floor(monster.body.position.y);
    const z = Math.floor(monster.body.position.z);
    
    for (let dx = -2; dx <= 2; dx++) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dz = -2; dz <= 2; dz++) {
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist <= 2 && Math.random() > 0.3) {
            this.world.setBlock(x + dx, y + dy, z + dz, 0);
          }
        }
      }
    }
    
    // Remove creeper
    const index = this.monsters.indexOf(monster);
    if (index !== -1) {
      this.removeMonster(index);
    }
  }

  damageMonster(monster, damage) {
    monster.health -= damage;
    
    // Flash red
    const originalColor = monster.profile.color;
    monster.bodyParts.body.material.color.setHex(0xff0000);
    setTimeout(() => {
      if (monster.bodyParts.body) {
        monster.bodyParts.body.material.color.setHex(originalColor);
      }
    }, 100);
  }

  removeMonster(index) {
    const monster = this.monsters[index];
    
    // Drop items
    if (monster.profile.drop && monster.health <= 0) {
      // Drop will be handled by player when they kill the monster
      monster.dropPosition = new THREE.Vector3().copy(monster.mesh.position);
    }
    
    // Clean up colliders
    if (monster.colliderMap) {
      for (const [key, body] of monster.colliderMap) {
        this.physicsWorld.removeBody(body);
      }
      monster.colliderMap.clear();
    }
    
    this.scene.remove(monster.mesh);
    this.physicsWorld.removeBody(monster.body);
    this.monsters.splice(index, 1);
  }

  raycastMonster(raycaster) {
    // Check which monster was hit
    for (const monster of this.monsters) {
      const intersects = raycaster.intersectObject(monster.mesh, true);
      if (intersects.length > 0) {
        return monster;
      }
    }
    return null;
  }

  clearAllMonsters() {
    while (this.monsters.length > 0) {
      this.removeMonster(0);
    }
  }

  updateMonsterColliders(monster) {
    // Similar to player colliders - create physics bodies for nearby blocks
    const boxSize = 2;
    const px = Math.floor(monster.body.position.x);
    const py = Math.floor(monster.body.position.y);
    const pz = Math.floor(monster.body.position.z);
    
    const neededKeys = new Set();
    
    for (let x = px - boxSize; x <= px + boxSize; x++) {
      for (let y = py - boxSize; y <= py + boxSize; y++) {
        for (let z = pz - boxSize; z <= pz + boxSize; z++) {
          const block = this.world.getBlock(x, y, z);
          // Solid blocks (not air, water, leaves, lava)
          if (block !== 0 && block !== 6 && block !== 7 && block !== 15) {
            const key = `${x},${y},${z}`;
            neededKeys.add(key);
            
            if (!monster.colliderMap.has(key)) {
              const body = new CANNON.Body({
                mass: 0,
                position: new CANNON.Vec3(x + 0.5, y + 0.5, z + 0.5),
                shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)),
                material: this.blockMaterial
              });
              this.physicsWorld.addBody(body);
              monster.colliderMap.set(key, body);
            }
          }
        }
      }
    }
    
    // Remove colliders that are no longer needed
    for (const [key, body] of monster.colliderMap) {
      if (!neededKeys.has(key)) {
        this.physicsWorld.removeBody(body);
        monster.colliderMap.delete(key);
      }
    }
  }
}
