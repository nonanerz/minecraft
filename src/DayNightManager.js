import * as THREE from 'three';

export class DayNightManager {
  constructor(scene) {
    this.scene = scene;
    
    // Time settings (in seconds)
    this.dayLength = 600; // 10 minutes for full day/night cycle
    this.currentTime = 0; // 0-1 (0 = midnight, 0.25 = sunrise, 0.5 = noon, 0.75 = sunset)
    
    // Light objects
    this.sunLight = null;
    this.moonLight = null;
    this.ambientLight = null;
    
    // Sky colors
    this.skyColors = {
      day: new THREE.Color(0x87CEEB),
      sunset: new THREE.Color(0xFF6B35),
      night: new THREE.Color(0x0a0a1a),
      sunrise: new THREE.Color(0xFF9D6F)
    };
    
    this.fogColors = {
      day: new THREE.Color(0x87CEEB),
      sunset: new THREE.Color(0xCC5533),
      night: new THREE.Color(0x0a0a1a),
      sunrise: new THREE.Color(0xDD7744)
    };
    
    this.setupLights();
    this.createSunMoon();
  }

  setupLights() {
    // Remove existing lights
    const existingLights = [];
    this.scene.traverse((obj) => {
      if (obj.isLight) existingLights.push(obj);
    });
    existingLights.forEach(light => this.scene.remove(light));
    
    // Ambient light
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(this.ambientLight);
    
    // Sun light (directional)
    this.sunLight = new THREE.DirectionalLight(0xffffff, 0.8);
    this.sunLight.position.set(50, 100, 50);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 500;
    this.sunLight.shadow.camera.left = -50;
    this.sunLight.shadow.camera.right = 50;
    this.sunLight.shadow.camera.top = 50;
    this.sunLight.shadow.camera.bottom = -50;
    this.scene.add(this.sunLight);
    
    // Moon light (much dimmer)
    this.moonLight = new THREE.DirectionalLight(0x6666ff, 0.2);
    this.moonLight.position.set(-50, 100, -50);
    this.moonLight.visible = false;
    this.scene.add(this.moonLight);
  }

  createSunMoon() {
    // Sun
    const sunGeometry = new THREE.SphereGeometry(5, 16, 16);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    this.sun = new THREE.Mesh(sunGeometry, sunMaterial);
    this.scene.add(this.sun);
    
    // Moon
    const moonGeometry = new THREE.SphereGeometry(4, 16, 16);
    const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xddddff });
    this.moon = new THREE.Mesh(moonGeometry, moonMaterial);
    this.moon.visible = false;
    this.scene.add(this.moon);
  }

  update(dt, playerPosition) {
    // Update time (0 to 1)
    this.currentTime += dt / this.dayLength;
    if (this.currentTime >= 1) this.currentTime -= 1;
    
    // Calculate time of day
    const timeOfDay = this.getTimeOfDay();
    
    // Update sky and fog color
    this.updateSkyColor();
    
    // Update lighting
    this.updateLighting(timeOfDay);
    
    // Update sun/moon position
    this.updateCelestialBodies(playerPosition);
  }

  getTimeOfDay() {
    // Returns: 'night', 'sunrise', 'day', 'sunset'
    if (this.currentTime < 0.23) return 'night';
    if (this.currentTime < 0.27) return 'sunrise';
    if (this.currentTime < 0.73) return 'day';
    if (this.currentTime < 0.77) return 'sunset';
    return 'night';
  }

  updateSkyColor() {
    let color, fogColor;
    
    if (this.currentTime < 0.23) {
      // Night
      color = this.skyColors.night;
      fogColor = this.fogColors.night;
    } else if (this.currentTime < 0.27) {
      // Sunrise transition
      const t = (this.currentTime - 0.23) / 0.04;
      color = new THREE.Color().lerpColors(this.skyColors.night, this.skyColors.sunrise, t);
      fogColor = new THREE.Color().lerpColors(this.fogColors.night, this.fogColors.sunrise, t);
    } else if (this.currentTime < 0.73) {
      // Day
      const t = Math.min((this.currentTime - 0.27) / 0.1, 1);
      color = new THREE.Color().lerpColors(this.skyColors.sunrise, this.skyColors.day, t);
      fogColor = new THREE.Color().lerpColors(this.fogColors.sunrise, this.fogColors.day, t);
    } else if (this.currentTime < 0.77) {
      // Sunset transition
      const t = (this.currentTime - 0.73) / 0.04;
      color = new THREE.Color().lerpColors(this.skyColors.day, this.skyColors.sunset, t);
      fogColor = new THREE.Color().lerpColors(this.fogColors.day, this.fogColors.sunset, t);
    } else {
      // Night transition
      const t = Math.min((this.currentTime - 0.77) / 0.1, 1);
      color = new THREE.Color().lerpColors(this.skyColors.sunset, this.skyColors.night, t);
      fogColor = new THREE.Color().lerpColors(this.fogColors.sunset, this.fogColors.night, t);
    }
    
    this.scene.background = color;
    if (this.scene.fog) {
      this.scene.fog.color = fogColor;
    }
  }

  updateLighting(timeOfDay) {
    const isNight = timeOfDay === 'night';
    const isDay = timeOfDay === 'day';
    
    // Smooth transition
    let ambientIntensity, sunIntensity;
    
    if (this.currentTime < 0.25) {
      // Night to sunrise
      ambientIntensity = 0.3;
      sunIntensity = 0;
    } else if (this.currentTime < 0.3) {
      // Sunrise
      const t = (this.currentTime - 0.25) / 0.05;
      ambientIntensity = 0.3 + t * 0.3;
      sunIntensity = t * 0.8;
    } else if (this.currentTime < 0.7) {
      // Day
      ambientIntensity = 0.6;
      sunIntensity = 0.8;
    } else if (this.currentTime < 0.75) {
      // Sunset
      const t = (this.currentTime - 0.7) / 0.05;
      ambientIntensity = 0.6 - t * 0.3;
      sunIntensity = 0.8 - t * 0.8;
    } else {
      // Night
      ambientIntensity = 0.3;
      sunIntensity = 0;
    }
    
    this.ambientLight.intensity = ambientIntensity;
    this.sunLight.intensity = sunIntensity;
    
    // Moon light at night
    this.moonLight.intensity = isNight ? 0.2 : 0;
    this.moonLight.visible = isNight;
    
    // Sun/moon color
    if (timeOfDay === 'sunrise' || timeOfDay === 'sunset') {
      this.sunLight.color.setHex(0xffaa66);
    } else {
      this.sunLight.color.setHex(0xffffff);
    }
  }

  updateCelestialBodies(playerPosition) {
    // Sun and moon orbit around player
    const angle = this.currentTime * Math.PI * 2;
    const radius = 150;
    const height = 100;
    
    // Sun position
    const sunX = playerPosition.x + Math.cos(angle) * radius;
    const sunY = Math.sin(angle) * height;
    const sunZ = playerPosition.z + Math.sin(angle) * radius;
    
    this.sun.position.set(sunX, Math.max(sunY, -50), sunZ);
    this.sun.visible = sunY > -20;
    
    // Update sun light direction
    this.sunLight.position.set(sunX, Math.max(sunY, 50), sunZ);
    
    // Moon position (opposite to sun)
    const moonAngle = angle + Math.PI;
    const moonX = playerPosition.x + Math.cos(moonAngle) * radius;
    const moonY = Math.sin(moonAngle) * height;
    const moonZ = playerPosition.z + Math.sin(moonAngle) * radius;
    
    this.moon.position.set(moonX, Math.max(moonY, -50), moonZ);
    this.moon.visible = moonY > -20;
    
    // Update moon light direction
    this.moonLight.position.set(moonX, Math.max(moonY, 50), moonZ);
  }

  isNight() {
    return this.currentTime < 0.25 || this.currentTime > 0.75;
  }

  isDark() {
    // Returns true when it's dark enough for monsters
    // Extended dark period: 0-0.25 (night) and 0.73-1.0 (evening/night)
    return this.currentTime < 0.25 || this.currentTime > 0.73;
  }

  getTimeString() {
    // Convert to 24h format
    const hours = Math.floor(this.currentTime * 24);
    const minutes = Math.floor((this.currentTime * 24 * 60) % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  setTime(time) {
    // time: 0-1
    this.currentTime = time % 1;
  }

  skipToMorning() {
    // Skip to 6 AM (0.25)
    this.currentTime = 0.25;
  }
}

