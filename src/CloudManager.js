import * as THREE from 'three';

export class CloudManager {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.clouds = [];
    this.radius = 120;
    this.baseY = 85;
    this.speed = 3.0;

    const mat = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
      depthWrite: false
    });

    const makeCloud = () => {
      const g = new THREE.Group();
      const puffGeo = new THREE.BoxGeometry(6, 3, 4);
      const count = 3 + Math.floor(Math.random() * 4);
      for (let i = 0; i < count; i++) {
        const puff = new THREE.Mesh(puffGeo, mat);
        puff.position.set(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 8
        );
        puff.scale.set(
          0.8 + Math.random() * 1.4,
          0.8 + Math.random() * 1.1,
          0.8 + Math.random() * 1.4
        );
        g.add(puff);
      }
      return g;
    };

    // Initial cloud field
    for (let i = 0; i < 18; i++) {
      const c = makeCloud();
      c.position.set(
        (Math.random() - 0.5) * this.radius * 2,
        this.baseY + Math.random() * 18,
        (Math.random() - 0.5) * this.radius * 2
      );
      c.userData.vx = (0.3 + Math.random() * 0.7) * (Math.random() < 0.5 ? 1 : -1);
      c.userData.vz = (0.2 + Math.random() * 0.6) * (Math.random() < 0.5 ? 1 : -1);
      this.group.add(c);
      this.clouds.push(c);
    }
  }

  update(dt, playerPos) {
    if (!dt) return;
    const px = playerPos?.x ?? 0;
    const pz = playerPos?.z ?? 0;

    for (const c of this.clouds) {
      c.position.x += c.userData.vx * this.speed * dt;
      c.position.z += c.userData.vz * this.speed * dt;

      // Wrap around the player so clouds are always nearby
      const dx = c.position.x - px;
      const dz = c.position.z - pz;
      if (dx > this.radius) c.position.x -= this.radius * 2;
      if (dx < -this.radius) c.position.x += this.radius * 2;
      if (dz > this.radius) c.position.z -= this.radius * 2;
      if (dz < -this.radius) c.position.z += this.radius * 2;
    }
  }
}



