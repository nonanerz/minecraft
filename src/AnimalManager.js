import * as THREE from 'three';
import * as CANNON from 'cannon-es';

const ANIMAL_PROFILES = [
  {
    name: 'Mountain Goat',
    color: 0xf3e5f5,
    size: 0.8,
    speed: 1.4,
    heightOffset: 0.7,
    drop: { type: 12, count: 2 }
  },
  {
    name: 'Wild Boar',
    color: 0x795548,
    size: 0.9,
    speed: 1.0,
    heightOffset: 0.6,
    drop: { type: 11, count: 2 }
  },
  {
    name: 'Peppy Chick',
    color: 0xffca28,
    size: 0.5,
    speed: 1.8,
    heightOffset: 0.5,
    drop: { type: 13, count: 3 }
  }
];

class Animal {
  constructor(profile, position, physicsWorld) {
    this.profile = profile;
    this.mesh = this.createMesh();
    this.mesh.position.copy(position);
    this.spawnCenter = new THREE.Vector3(position.x, position.y, position.z);
    this.direction = new THREE.Vector3();
    this.moveTimer = 0;
    this.heightOffset = profile.heightOffset ?? 0.6;
    this.physicsWorld = physicsWorld || null;
    this.body = null;
    if (this.physicsWorld) {
      this.body = this.createPhysicsBody(position);
      this.physicsWorld.addBody(this.body);
    }
    this.chooseDirection();
  }

  createMesh() {
    // Still cheap geometry, but more "animal-like" than a single cube.
    const group = new THREE.Group();

    const baseMat = new THREE.MeshStandardMaterial({
      color: this.profile.color,
      roughness: 0.85,
      metalness: 0.05
    });
    const darkMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.profile.color).multiplyScalar(0.55),
      roughness: 0.9,
      metalness: 0.02
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.95,
      metalness: 0.0
    });

    const s = this.profile.size;
    const bodyGeo = new THREE.BoxGeometry(s * 1.15, s * 0.6, s * 0.75);
    const headGeo = new THREE.BoxGeometry(s * 0.55, s * 0.45, s * 0.55);
    const legGeo = new THREE.BoxGeometry(s * 0.18, s * 0.4, s * 0.18);

    const body = new THREE.Mesh(bodyGeo, baseMat);
    body.position.set(0, s * 0.38, 0);
    body.castShadow = true;
    body.receiveShadow = true;

    const head = new THREE.Mesh(headGeo, baseMat);
    head.position.set(0, s * 0.48, s * 0.62);
    head.castShadow = true;
    head.receiveShadow = true;

    const legs = [];
    const legPositions = [
      [-s * 0.38, s * 0.12, -s * 0.25],
      [ s * 0.38, s * 0.12, -s * 0.25],
      [-s * 0.38, s * 0.12,  s * 0.25],
      [ s * 0.38, s * 0.12,  s * 0.25],
    ];
    for (const [lx, ly, lz] of legPositions) {
      const leg = new THREE.Mesh(legGeo, darkMat);
      leg.position.set(lx, ly, lz);
      leg.castShadow = true;
      leg.receiveShadow = true;
      legs.push(leg);
    }

    group.add(body, head, ...legs);

    // Profile-specific details
    if (this.profile.name.includes('Goat')) {
      const hornGeo = new THREE.BoxGeometry(s * 0.12, s * 0.28, s * 0.12);
      const horn1 = new THREE.Mesh(hornGeo, accentMat);
      const horn2 = new THREE.Mesh(hornGeo, accentMat);
      horn1.position.set(-s * 0.16, s * 0.72, s * 0.72);
      horn2.position.set( s * 0.16, s * 0.72, s * 0.72);
      group.add(horn1, horn2);
    } else if (this.profile.name.includes('Boar')) {
      const snoutGeo = new THREE.BoxGeometry(s * 0.35, s * 0.25, s * 0.25);
      const snout = new THREE.Mesh(snoutGeo, darkMat);
      snout.position.set(0, s * 0.42, s * 0.92);
      const tuskGeo = new THREE.BoxGeometry(s * 0.08, s * 0.12, s * 0.08);
      const tusk1 = new THREE.Mesh(tuskGeo, accentMat);
      const tusk2 = new THREE.Mesh(tuskGeo, accentMat);
      tusk1.position.set(-s * 0.16, s * 0.32, s * 0.96);
      tusk2.position.set( s * 0.16, s * 0.32, s * 0.96);
      group.add(snout, tusk1, tusk2);
    } else if (this.profile.name.includes('Chick')) {
      // Make the chick rounder + add wings and beak.
      body.scale.set(0.9, 0.85, 0.9);
      head.scale.set(0.85, 0.85, 0.85);
      head.position.set(0, s * 0.52, s * 0.58);
      const beakGeo = new THREE.BoxGeometry(s * 0.18, s * 0.12, s * 0.18);
      const beakMat = new THREE.MeshStandardMaterial({ color: 0xffb300, roughness: 0.7, metalness: 0.0 });
      const beak = new THREE.Mesh(beakGeo, beakMat);
      beak.position.set(0, s * 0.5, s * 0.85);
      const wingGeo = new THREE.BoxGeometry(s * 0.1, s * 0.28, s * 0.35);
      const wing1 = new THREE.Mesh(wingGeo, baseMat);
      const wing2 = new THREE.Mesh(wingGeo, baseMat);
      wing1.position.set(-s * 0.62, s * 0.42, s * 0.05);
      wing2.position.set( s * 0.62, s * 0.42, s * 0.05);
      group.add(beak, wing1, wing2);
    }

    group.userData = group.userData || {};
    group.userData.animal = this;
    for (const child of group.children) {
      child.userData = child.userData || {};
      child.userData.animal = this;
    }

    group.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });

    return group;
  }

  createPhysicsBody(position) {
    const r = Math.max(0.2, this.profile.size * 0.35);
    const body = new CANNON.Body({
      mass: 0,
      type: CANNON.Body.KINEMATIC,
      position: new CANNON.Vec3(position.x, position.y, position.z),
      shape: new CANNON.Sphere(r)
    });
    body.fixedRotation = true;
    return body;
  }

  chooseDirection() {
    const dx = Math.random() - 0.5;
    const dz = Math.random() - 0.5;
    this.direction.set(dx, 0, dz);
    if (this.direction.lengthSq() < 0.01) {
      this.direction.set(1, 0, 0);
    }
    this.direction.normalize();
    this.moveTimer = 0.8 + Math.random() * 1.8;
  }

  update(dt, world) {
    this.moveTimer -= dt;
    if (this.moveTimer <= 0) this.chooseDirection();

    const move = this.direction.clone().multiplyScalar(this.profile.speed * dt);
    this.mesh.position.add(move);
    // Face movement direction (only yaw).
    if (this.direction.lengthSq() > 0.0001) {
      const yaw = Math.atan2(this.direction.x, this.direction.z);
      this.mesh.rotation.y = yaw;
    }

    const dx = this.mesh.position.x - this.spawnCenter.x;
    const dz = this.mesh.position.z - this.spawnCenter.z;
    const dist = Math.sqrt(dx * dx + dz * dz);
    if (dist > 12) {
      const toCenter = new THREE.Vector3(-dx, 0, -dz).normalize();
      this.mesh.position.addScaledVector(toCenter, this.profile.speed * dt * 1.2);
      this.direction.copy(toCenter);
    }

    const surfaceY = world.getSurfaceY(
      Math.floor(this.mesh.position.x),
      Math.floor(this.mesh.position.z)
    );
    if (surfaceY !== null) {
      // `surfaceY` is the y of the topmost ground block; stand on top of it.
      this.mesh.position.y = surfaceY + 1 + this.heightOffset;
    }

    if (this.body) {
      this.body.position.set(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z);
      this.body.aabbNeedsUpdate = true;
    }
  }
}

export class AnimalManager {
  constructor(scene, world, physicsWorld) {
    this.scene = scene;
    this.world = world;
    this.physicsWorld = physicsWorld || null;
    this.animals = [];
    this.spawnTimer = 0;
    this.maxAnimals = 8; // Further reduced from 15 to 8
  }

  update(dt, playerPosition) {
    if (!dt) return;
    this.spawnTimer += dt;
    if (playerPosition && this.spawnTimer > 0.9) {
      this.spawnTimer = 0;
      this.trySpawnNear(playerPosition);
    }

    for (const animal of this.animals) {
      animal.update(dt, this.world);
    }
  }

  trySpawnNear(playerPosition) {
    if (this.animals.length >= this.maxAnimals) return;
    for (let i = 0; i < 3; i++) {
      const x = Math.floor(playerPosition.x + (Math.random() * 32 - 16));
      const z = Math.floor(playerPosition.z + (Math.random() * 32 - 16));
      const surfaceY = this.world.getSurfaceY(x, z);
      if (surfaceY === null) continue;
      const topBlock = this.world.getBlock(x, surfaceY, z);
      if (topBlock !== 2 && topBlock !== 1) continue;
      if (Math.random() > 0.35) continue;
      const profile =
        ANIMAL_PROFILES[Math.floor(Math.random() * ANIMAL_PROFILES.length)];
      // Spawn on top of ground (surfaceY + 1).
      this.spawnAnimal(profile, new THREE.Vector3(x + 0.5, surfaceY + 1.0, z + 0.5));
      break;
    }
  }

  spawnAnimal(profile, position) {
    const animal = new Animal(profile, position, this.physicsWorld);
    this.scene.add(animal.mesh);
    this.animals.push(animal);
  }

  raycast(raycaster) {
    if (this.animals.length === 0) return null;
    const meshes = this.animals.map((animal) => animal.mesh);
    const intersects = raycaster.intersectObjects(meshes, true);
    if (intersects.length === 0) return null;
    let obj = intersects[0].object;
    while (obj) {
      if (obj.userData?.animal) return obj.userData.animal;
      obj = obj.parent;
    }
    return null;
  }

  remove(animal) {
    const index = this.animals.indexOf(animal);
    if (index === -1) return;
    this.scene.remove(animal.mesh);
    if (animal.body && this.physicsWorld) {
      this.physicsWorld.removeBody(animal.body);
    }
    this.animals.splice(index, 1);
  }
}

