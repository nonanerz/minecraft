import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { World } from './World.js';
import { Player } from './Player.js';
import { Input } from './Input.js';
import { TextureManager } from './TextureManager.js';
import { Inventory } from './Inventory.js';
import { UIManager } from './UIManager.js';
import { CloudManager } from './CloudManager.js';
import { HandManager } from './HandManager.js';
import { DayNightManager } from './DayNightManager.js';
import { MonsterManager } from './MonsterManager.js';
import { PlaceableObjectsManager } from './PlaceableObjects.js';
import { SaveManager } from './SaveManager.js';
import { createNoise2D, createNoise3D } from 'simplex-noise';

// Setup Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB); 
// Better Fog
scene.fog = new THREE.Fog(0x87CEEB, 20, 80); // Closer fog start for atmosphere

// Setup Camera
const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.add(camera);

// Setup Renderer
const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Prevent the browser context menu from stealing focus while playing.
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Setup Lights
// Hemisphere light for nice sky/ground gradient
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
hemiLight.position.set(0, 200, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(50, 100, 50);
dirLight.castShadow = true;
// Optimize shadow map
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.near = 0.5;
dirLight.shadow.camera.far = 200;
dirLight.shadow.camera.left = -50;
dirLight.shadow.camera.right = 50;
dirLight.shadow.camera.top = 50;
dirLight.shadow.camera.bottom = -50;
dirLight.shadow.bias = -0.0005;
scene.add(dirLight);

// Setup Physics
const physicsWorld = new CANNON.World();
physicsWorld.gravity.set(0, -25, 0);
physicsWorld.broadphase = new CANNON.SAPBroadphase(physicsWorld);
// Reduce "sticky" contacts globally (player vs blocks, player vs animals, etc.).
physicsWorld.defaultContactMaterial.friction = 0;
physicsWorld.defaultContactMaterial.restitution = 0;

// Managers
const input = new Input();
const textureManager = new TextureManager();
textureManager.load();

const uiManager = new UIManager();
const inventory = new Inventory(uiManager);
uiManager.setInventory(inventory);

const world = new World(scene, textureManager, physicsWorld);
// Seeded noise will be set by SaveManager (so world can be saved/loaded deterministically).
world.noise2D = createNoise2D();
world.noise3D = createNoise3D();

const dayNightManager = new DayNightManager(scene);
const placeableObjects = new PlaceableObjectsManager(scene, world, physicsWorld);
const monsterManager = new MonsterManager(scene, physicsWorld, world);
const handManager = new HandManager(scene, camera);
const player = new Player(scene, camera, physicsWorld, input, world, inventory, handManager, monsterManager, placeableObjects, dayNightManager);
const cloudManager = new CloudManager(scene);

// Save/Load
const saveManager = new SaveManager({ world, player, inventory, dayNightManager, placeableObjects });
// Ensure we have a seed on boot for deterministic world
saveManager.ensureSeed();
saveManager.applySeed(world.seed);

// Connect player health UI update and chest opening
player.updateHealthUI = () => updateHealthUI();
player.openChest = (chestObject) => openChestUI(chestObject);

// Debug handles (helps diagnose "broken world" issues from DevTools)
globalThis.__mc = { scene, camera, physicsWorld, input, textureManager, uiManager, inventory, world, player, handManager, dayNightManager, monsterManager, placeableObjects };

function toast(msg) {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.style.position = 'fixed';
    el.style.left = '50%';
    el.style.top = '20px';
    el.style.transform = 'translateX(-50%)';
    el.style.background = 'rgba(0,0,0,0.7)';
    el.style.color = 'white';
    el.style.padding = '8px 12px';
    el.style.borderRadius = '6px';
    el.style.fontFamily = 'monospace';
    el.style.zIndex = '2000';
    el.style.pointerEvents = 'none';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.display = 'block';
  clearTimeout(el.__t);
  el.__t = setTimeout(() => (el.style.display = 'none'), 1500);
}

world.update(0, 0);
const spawnY = world.getSurfaceY(0, 0);
if (spawnY !== null) {
    player.body.position.y = spawnY + 2;
    player.camera.position.y = player.body.position.y + 0.6;
}

// Add some starting items
inventory.add(4, 10); // 10 Logs
inventory.add(44, 20); // 20 Cobblestone
inventory.add(40, 10); // 10 Coal
inventory.add(11, 5); // 5 Raw Meat
inventory.add(16, 3); // 3 Cooked Meat

// UI Logic
const hotbar = document.getElementById('hotbar');
const inventoryScreen = document.getElementById('inventory-screen');
const chestScreen = document.getElementById('chest-screen');
let isInventoryOpen = false;
let isChestOpen = false;
let currentChestData = null;

// Input for Inventory
document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyE' && !isChestOpen) {
        isInventoryOpen = !isInventoryOpen;
        inventoryScreen.style.display = isInventoryOpen ? 'block' : 'none';
        if (isInventoryOpen) {
            input.setPointerLockEnabled(false);
            uiManager.updateInventoryUI();
        } else {
            input.setPointerLockEnabled(true);
            document.body.requestPointerLock();
        }
    }
    
    // ESC to close chest
    if (e.code === 'Escape' && isChestOpen) {
        closeChestUI();
    }
    
    // Number keys
    if (!isInventoryOpen && !isChestOpen && e.key >= '1' && e.key <= '9') {
        inventory.selectSlot(parseInt(e.key) - 1);
    }
    // Debug: N key to set time to night
    if (e.code === 'KeyN' && !isInventoryOpen && !isChestOpen) {
        dayNightManager.setTime(0.0); // Midnight
        console.log('Час змінено на ніч!');
    }
    // Debug: M key to spawn monster nearby
    if (e.code === 'KeyM' && !isInventoryOpen && !isChestOpen) {
        // Spawn in front of player
        const distance = 5;
        const forward = new THREE.Vector3(
            Math.sin(player.yaw),
            0,
            Math.cos(player.yaw)
        );
        
        const x = player.body.position.x + forward.x * distance;
        const z = player.body.position.z + forward.z * distance;
        
        // Spawn at player's Y level
        const y = Math.floor(player.body.position.y);
        
        const types = ['zombie', 'skeleton', 'creeper'];
        const type = types[Math.floor(Math.random() * types.length)];
        monsterManager.spawnMonster(type, new THREE.Vector3(x, y, z));
        console.log(`✅ Заспавнено ${type} перед вами на висоті ${y}!`);
    }
    // Debug: D key to set time to day
    if (e.code === 'KeyD' && !isInventoryOpen && !isChestOpen && e.ctrlKey) {
        dayNightManager.setTime(0.5); // Noon
        console.log('Час змінено на день!');
    }

    // Save / Load
    if (e.code === 'F5') {
        e.preventDefault();
        saveManager.save();
        toast('Saved ✅');
    }
    if (e.code === 'F9') {
        e.preventDefault();
        const loaded = saveManager.load();
        toast(loaded ? 'Loaded ✅' : 'No save found');
    }
});

// Inventory buttons
document.getElementById('save-game-btn')?.addEventListener('click', () => {
  saveManager.save();
  toast('Saved ✅');
});
document.getElementById('load-game-btn')?.addEventListener('click', () => {
  const loaded = saveManager.load();
  toast(loaded ? 'Loaded ✅' : 'No save found');
});

// Chest close button
document.getElementById('chest-close').addEventListener('click', closeChestUI);

// Handle Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Game Loop
let lastTime = performance.now();
const timeStep = 1 / 60;

function animate() {
    requestAnimationFrame(animate);

    const time = performance.now();
    const dt = (time - lastTime) / 1000;
    lastTime = time;

    if (!isInventoryOpen && !isChestOpen) {
        // IMPORTANT: update world + colliders BEFORE stepping physics,
        // otherwise you can walk into an unloaded area and fall through.
        world.update(player.body.position.x, player.body.position.z, dt);
        player.update(dt);
        dayNightManager.update(dt, player.body.position);
        monsterManager.update(dt, player, dayNightManager);
        cloudManager.update(dt, { x: player.body.position.x, z: player.body.position.z });
        physicsWorld.step(timeStep, dt, 3);
    }
    
    // Update time display
    updateTimeDisplay();

    renderer.render(scene, camera);
}

// Health and Hunger UI
function updateHealthUI() {
    const healthContainer = document.getElementById('health-bar');
    if (!healthContainer) return;
    
    healthContainer.innerHTML = '';
    
    // Health hearts
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        if (i < Math.ceil(player.health / 2)) {
            heart.textContent = player.health - (i * 2) >= 2 ? '❤️' : '💔';
        } else {
            heart.textContent = '🖤';
        }
        healthContainer.appendChild(heart);
    }
    
    // Hunger
    const hungerContainer = document.getElementById('hunger-bar');
    if (!hungerContainer) return;
    
    hungerContainer.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {
        const food = document.createElement('div');
        food.className = 'food';
        if (i < Math.ceil(player.hunger / 2)) {
            food.textContent = player.hunger - (i * 2) >= 2 ? '🍗' : '🦴';
        } else {
            food.textContent = '⚫';
        }
        hungerContainer.appendChild(food);
    }
}

function updateTimeDisplay() {
    const timeDisplay = document.getElementById('time-display');
    if (!timeDisplay) return;
    
    const timeStr = dayNightManager.getTimeString();
    const timeOfDay = dayNightManager.getTimeOfDay();
    const emoji = timeOfDay === 'night' ? '🌙' : timeOfDay === 'day' ? '☀️' : '🌅';
    const monsterCount = monsterManager.monsters.length;
    timeDisplay.textContent = `${emoji} ${timeStr} | 👾 ${monsterCount}`;
}

function openChestUI(chestObject) {
    isChestOpen = true;
    currentChestData = chestObject;
    chestScreen.style.display = 'block';
    input.setPointerLockEnabled(false);
    
    // Open chest (animate lid)
    placeableObjects.openChest(chestObject.position.x, chestObject.position.y, chestObject.position.z);
    
    updateChestUI();
}

function closeChestUI() {
    if (!isChestOpen) return;
    
    isChestOpen = false;
    chestScreen.style.display = 'none';
    input.setPointerLockEnabled(true);
    document.body.requestPointerLock();
    
    // Close chest (animate lid)
    if (currentChestData) {
        placeableObjects.closeChest(currentChestData.position.x, currentChestData.position.y, currentChestData.position.z);
    }
    
    currentChestData = null;
}

function updateChestUI() {
    if (!currentChestData) return;
    
    const chestInv = document.getElementById('chest-inventory');
    const playerInv = document.getElementById('chest-player-inventory');
    
    if (chestInv) {
        chestInv.innerHTML = '';
        for (let i = 0; i < 27; i++) {
            const item = currentChestData.data.inventory[i];
            const slot = document.createElement('div');
            slot.className = 'inv-slot';
            slot.dataset.chestIndex = i;
            
            if (item) {
                uiManager.renderItem(slot, item);
            }
            
            slot.addEventListener('click', (e) => handleChestSlotClick(i, false, e));
            chestInv.appendChild(slot);
        }
    }
    
    if (playerInv) {
        playerInv.innerHTML = '';
        for (let i = 0; i < 36; i++) {
            const item = inventory.slots[i];
            const slot = document.createElement('div');
            slot.className = 'inv-slot';
            slot.dataset.playerIndex = i;
            
            if (item) {
                uiManager.renderItem(slot, item);
            }
            
            slot.addEventListener('click', (e) => handleChestSlotClick(i, true, e));
            playerInv.appendChild(slot);
        }
    }
}

function handleChestSlotClick(index, isPlayerInventory, event) {
    if (event.shiftKey) {
        // Quick transfer
        if (isPlayerInventory) {
            // Move from player to chest
            const item = inventory.slots[index];
            if (!item) return;
            
            // Find empty slot in chest
            const emptySlot = currentChestData.data.inventory.findIndex(slot => !slot);
            if (emptySlot !== -1) {
                currentChestData.data.inventory[emptySlot] = { ...item };
                inventory.slots[index] = null;
                updateChestUI();
                uiManager.updateInventoryUI();
            }
        } else {
            // Move from chest to player
            const item = currentChestData.data.inventory[index];
            if (!item) return;
            
            if (inventory.add(item.type, item.count, { skipUI: true })) {
                currentChestData.data.inventory[index] = null;
                updateChestUI();
                uiManager.updateInventoryUI();
            }
        }
    } else {
        // Single item swap (simple implementation)
        if (isPlayerInventory) {
            const item = inventory.slots[index];
            if (!item) return;
            
            // Find empty slot in chest
            const emptySlot = currentChestData.data.inventory.findIndex(slot => !slot);
            if (emptySlot !== -1) {
                // Move one item
                currentChestData.data.inventory[emptySlot] = { type: item.type, count: 1 };
                inventory.consumeSlot(index, 1);
                updateChestUI();
                uiManager.updateInventoryUI();
            }
        } else {
            const item = currentChestData.data.inventory[index];
            if (!item) return;
            
            if (inventory.add(item.type, item.count, { skipUI: true })) {
                currentChestData.data.inventory[index] = null;
                updateChestUI();
                uiManager.updateInventoryUI();
            }
        }
    }
}

animate();
