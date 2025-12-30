import { ITEM_DEFINITIONS, ITEM_PATTERNS } from './ItemData.js';

// Manages HTML UI updates
export class UIManager {
    constructor(inventory) {
        this.inventory = inventory || null;
        this.hotbarEl = document.getElementById('hotbar');
        this.inventoryHotbarEl = document.getElementById('inventory-hotbar');
        this.inventoryGridEl = document.getElementById('inventory-grid');
        this.blockTypes = [
            { id: 1, name: 'Земля', color: '#5d4037' },
            { id: 2, name: 'Трава', color: '#4caf50' },
            { id: 3, name: 'Камінь', color: '#757575' },
            { id: 4, name: 'Колода', color: '#6d4c41' },
            { id: 5, name: 'Пісок', color: '#fff176' },
            { id: 6, name: 'Вода', color: '#42a5f5' },
            { id: 7, name: 'Листя', color: '#2e7d32' },
            { id: 8, name: 'Дошка', color: '#a1887f' },
            { id: 9, name: 'Корінна порода', color: '#212121' },
            { id: 10, name: 'Палиця', color: '#ffd54f' },
            { id: 11, name: "Сире м'ясо", color: '#ff7043' },
            { id: 12, name: 'Вовна', color: '#f5f5f5' },
            { id: 16, name: "Смажене м'ясо", color: '#8b4513' },
            { id: 17, name: 'Хліб', color: '#daa520' },
            { id: 18, name: 'Пшениця', color: '#f0e68c' },
            { id: 13, name: 'Перо', color: '#fff59d' },
            { id: 14, name: 'Факел', color: '#ffe082' },
            { id: 15, name: 'Лава', color: '#ff6d00' },
            // Tools - Wooden
            { id: 20, name: "Дерев'яна кірка", color: '#8d6e63' },
            { id: 21, name: "Дерев'яна сокира", color: '#8d6e63' },
            { id: 22, name: "Дерев'яна лопата", color: '#8d6e63' },
            { id: 23, name: "Дерев'яний меч", color: '#8d6e63' },
            // Tools - Stone
            { id: 24, name: "Кам'яна кірка", color: '#757575' },
            { id: 25, name: "Кам'яна сокира", color: '#757575' },
            { id: 26, name: "Кам'яна лопата", color: '#757575' },
            { id: 27, name: "Кам'яний меч", color: '#757575' },
            // Tools - Iron
            { id: 28, name: 'Залізна кірка', color: '#b0bec5' },
            { id: 29, name: 'Залізна сокира', color: '#b0bec5' },
            { id: 30, name: 'Залізна лопата', color: '#b0bec5' },
            { id: 31, name: 'Залізний меч', color: '#b0bec5' },
            // Tools - Diamond
            { id: 32, name: 'Алмазна кірка', color: '#4dd0e1' },
            { id: 33, name: 'Алмазна сокира', color: '#4dd0e1' },
            { id: 34, name: 'Алмазна лопата', color: '#4dd0e1' },
            { id: 35, name: 'Алмазний меч', color: '#4dd0e1' },
            // Materials
            { id: 40, name: 'Вугілля', color: '#263238' },
            { id: 41, name: 'Залізна руда', color: '#d7ccc8' },
            { id: 42, name: 'Залізний злиток', color: '#eceff1' },
            { id: 43, name: 'Алмаз', color: '#00bcd4' },
            { id: 44, name: 'Бруківка', color: '#616161' },
            // Armor - Iron
            { id: 54, name: 'Залізний шолом', color: '#b0bec5' },
            { id: 55, name: 'Залізний нагрудник', color: '#b0bec5' },
            { id: 56, name: 'Залізні поножі', color: '#b0bec5' },
            { id: 57, name: 'Залізні чоботи', color: '#b0bec5' },
            // Armor - Diamond
            { id: 58, name: 'Алмазний шолом', color: '#4dd0e1' },
            { id: 59, name: 'Алмазний нагрудник', color: '#4dd0e1' },
            { id: 60, name: 'Алмазні поножі', color: '#4dd0e1' },
            { id: 61, name: 'Алмазні чоботи', color: '#4dd0e1' },
            // Special items
            { id: 70, name: 'Ліжко', color: '#ff5555' },
            { id: 71, name: 'Скриня', color: '#8b6914' },
            { id: 72, name: 'Двері', color: '#8d6e63' }
        ];

        this.craftSlots = [null, null, null, null];
        this.craftResult = null;
        this.recipes = [
            // Basic crafting
            {
                name: 'Дошки',
                inputs: [{ type: 4, count: 1 }],
                result: { type: 8, count: 4 }
            },
            {
                name: 'Палиці',
                inputs: [{ type: 8, count: 2 }],
                result: { type: 10, count: 4 }
            },
            {
                name: 'Факел',
                inputs: [{ type: 10, count: 1 }, { type: 40, count: 1 }],
                result: { type: 14, count: 4 }
            },
            // Wooden Tools
            {
                name: "Дерев'яна кірка",
                inputs: [{ type: 8, count: 3 }, { type: 10, count: 2 }],
                result: { type: 20, count: 1 }
            },
            {
                name: "Дерев'яна сокира",
                inputs: [{ type: 8, count: 3 }, { type: 10, count: 2 }],
                result: { type: 21, count: 1 }
            },
            {
                name: "Дерев'яна лопата",
                inputs: [{ type: 8, count: 1 }, { type: 10, count: 2 }],
                result: { type: 22, count: 1 }
            },
            {
                name: "Дерев'яний меч",
                inputs: [{ type: 8, count: 2 }, { type: 10, count: 1 }],
                result: { type: 23, count: 1 }
            },
            // Stone Tools
            {
                name: "Кам'яна кірка",
                inputs: [{ type: 44, count: 3 }, { type: 10, count: 2 }],
                result: { type: 24, count: 1 }
            },
            {
                name: "Кам'яна сокира",
                inputs: [{ type: 44, count: 3 }, { type: 10, count: 2 }],
                result: { type: 25, count: 1 }
            },
            {
                name: "Кам'яна лопата",
                inputs: [{ type: 44, count: 1 }, { type: 10, count: 2 }],
                result: { type: 26, count: 1 }
            },
            {
                name: "Кам'яний меч",
                inputs: [{ type: 44, count: 2 }, { type: 10, count: 1 }],
                result: { type: 27, count: 1 }
            },
            // Iron Tools
            {
                name: 'Залізна кірка',
                inputs: [{ type: 42, count: 3 }, { type: 10, count: 2 }],
                result: { type: 28, count: 1 }
            },
            {
                name: 'Залізна сокира',
                inputs: [{ type: 42, count: 3 }, { type: 10, count: 2 }],
                result: { type: 29, count: 1 }
            },
            {
                name: 'Залізна лопата',
                inputs: [{ type: 42, count: 1 }, { type: 10, count: 2 }],
                result: { type: 30, count: 1 }
            },
            {
                name: 'Залізний меч',
                inputs: [{ type: 42, count: 2 }, { type: 10, count: 1 }],
                result: { type: 31, count: 1 }
            },
            // Diamond Tools
            {
                name: 'Алмазна кірка',
                inputs: [{ type: 43, count: 3 }, { type: 10, count: 2 }],
                result: { type: 32, count: 1 }
            },
            {
                name: 'Алмазна сокира',
                inputs: [{ type: 43, count: 3 }, { type: 10, count: 2 }],
                result: { type: 33, count: 1 }
            },
            {
                name: 'Алмазна лопата',
                inputs: [{ type: 43, count: 1 }, { type: 10, count: 2 }],
                result: { type: 34, count: 1 }
            },
            {
                name: 'Алмазний меч',
                inputs: [{ type: 43, count: 2 }, { type: 10, count: 1 }],
                result: { type: 35, count: 1 }
            },
            // Armor - Iron
            {
                name: 'Залізний шолом',
                inputs: [{ type: 42, count: 5 }],
                result: { type: 54, count: 1 }
            },
            {
                name: 'Залізний нагрудник',
                inputs: [{ type: 42, count: 8 }],
                result: { type: 55, count: 1 }
            },
            {
                name: 'Залізні поножі',
                inputs: [{ type: 42, count: 7 }],
                result: { type: 56, count: 1 }
            },
            {
                name: 'Залізні чоботи',
                inputs: [{ type: 42, count: 4 }],
                result: { type: 57, count: 1 }
            },
            // Armor - Diamond
            {
                name: 'Алмазний шолом',
                inputs: [{ type: 43, count: 5 }],
                result: { type: 58, count: 1 }
            },
            {
                name: 'Алмазний нагрудник',
                inputs: [{ type: 43, count: 8 }],
                result: { type: 59, count: 1 }
            },
            {
                name: 'Алмазні поножі',
                inputs: [{ type: 43, count: 7 }],
                result: { type: 60, count: 1 }
            },
            {
                name: 'Алмазні чоботи',
                inputs: [{ type: 43, count: 4 }],
                result: { type: 61, count: 1 }
            },
            // Smelting simulation (Iron)
            {
                name: 'Залізний злиток',
                inputs: [{ type: 41, count: 1 }, { type: 40, count: 1 }],
                result: { type: 42, count: 1 }
            },
            // Cooking
            {
                name: "Смажене м'ясо",
                inputs: [{ type: 11, count: 1 }, { type: 40, count: 1 }],
                result: { type: 16, count: 1 }
            },
            // Food
            {
                name: 'Хліб',
                inputs: [{ type: 18, count: 3 }],
                result: { type: 17, count: 1 }
            },
            // Special items
            {
                name: 'Ліжко',
                inputs: [{ type: 8, count: 3 }, { type: 12, count: 3 }],
                result: { type: 70, count: 1 }
            },
            {
                name: 'Скриня',
                inputs: [{ type: 8, count: 8 }],
                result: { type: 71, count: 1 }
            },
            {
                name: 'Двері',
                inputs: [{ type: 8, count: 6 }],
                result: { type: 72, count: 1 }
            }
        ];

        this.initCraftingUI();
        this.initRecipeGuide();
        if (this.inventory) {
            this.setInventory(this.inventory);
        }
    }

    initRecipeGuide() {
        const guideBtn = document.getElementById('recipe-guide-btn');
        const guidePanel = document.getElementById('recipe-guide-panel');
        const guideClose = document.getElementById('recipe-guide-close');
        
        if (guideBtn) {
            guideBtn.onclick = () => {
                guidePanel.style.display = 'block';
                this.renderRecipeGuide();
            };
        }
        
        if (guideClose) {
            guideClose.onclick = () => {
                guidePanel.style.display = 'none';
            };
        }
    }

    renderRecipeGuide() {
        const guideContent = document.getElementById('recipe-guide-content');
        if (!guideContent) return;
        
        guideContent.innerHTML = '';
        
        // Group recipes by category
        const categories = {
            'Базове': this.recipes.slice(0, 3),
            "Дерев'яні інструменти": this.recipes.slice(3, 7),
            "Кам'яні інструменти": this.recipes.slice(7, 11),
            'Залізні інструменти': this.recipes.slice(11, 15),
            'Алмазні інструменти': this.recipes.slice(15, 19),
            'Залізна броня': this.recipes.slice(19, 23),
            'Алмазна броня': this.recipes.slice(23, 27),
            'Спеціальні предмети': this.recipes.slice(28, 31),
            'Їжа та переплавка': this.recipes.slice(27)
        };
        
        for (const [category, recipes] of Object.entries(categories)) {
            const categoryEl = document.createElement('div');
            categoryEl.className = 'recipe-category';
            
            const titleEl = document.createElement('h4');
            titleEl.textContent = category;
            categoryEl.appendChild(titleEl);
            
            for (const recipe of recipes) {
                const recipeEl = document.createElement('div');
                recipeEl.className = 'recipe-item';
                
                // Inputs
                const inputsEl = document.createElement('div');
                inputsEl.className = 'recipe-inputs';
                for (const input of recipe.inputs) {
                    const inputEl = document.createElement('div');
                    inputEl.className = 'recipe-slot';
                    this.renderItem(inputEl, input);
                    inputsEl.appendChild(inputEl);
                }
                recipeEl.appendChild(inputsEl);
                
                // Arrow
                const arrowEl = document.createElement('div');
                arrowEl.className = 'recipe-arrow';
                arrowEl.textContent = '→';
                recipeEl.appendChild(arrowEl);
                
                // Result
                const resultEl = document.createElement('div');
                resultEl.className = 'recipe-slot';
                this.renderItem(resultEl, recipe.result, true);
                recipeEl.appendChild(resultEl);
                
                categoryEl.appendChild(recipeEl);
            }
            
            guideContent.appendChild(categoryEl);
        }
    }

    setInventory(inv) {
        this.inventory = inv;
        this.initHotbar();
        this.updateInventoryUI();
    }

    getBlockColor(id) {
        const block = this.blockTypes.find(b => b.id === id);
        return block ? block.color : '#ff00ff';
    }

    getBlockName(id) {
        const block = this.blockTypes.find(b => b.id === id);
        return block ? block.name : 'Unknown';
    }

    initHotbar() {
        if (!this.hotbarEl) return;
        this.hotbarEl.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const slot = document.createElement('div');
            slot.className = 'slot';
            slot.dataset.index = i;
            if (i === 0) slot.classList.add('active');

            const content = document.createElement('div');
            content.className = 'slot-content';
            slot.appendChild(content);

            slot.onclick = () => {
                if (this.inventory) this.inventory.selectSlot(i);
            };
            this.hotbarEl.appendChild(slot);
        }
    }

    updateHotbarSelection(index) {
        if (!this.hotbarEl) return;
        const slots = this.hotbarEl.querySelectorAll('.slot');
        slots.forEach(s => s.classList.remove('active'));
        if (slots[index]) slots[index].classList.add('active');
    }

    initCraftingUI() {
        const slots = document.querySelectorAll('.crafting-slot');
        slots.forEach((slot, idx) => {
            slot.dataset.craftIndex = idx;
        });
    }

    updateInventoryUI() {
        if (!this.inventory) return;

        const slots = this.hotbarEl.querySelectorAll('.slot');
        for (let i = 0; i < 9; i++) {
            const item = this.inventory.slots[i];
            const content = slots[i].querySelector('.slot-content');
            if (content) {
                content.innerHTML = '';
                if (item) {
                    this.renderItem(content, item);
                }
            }
        }

        // Render hotbar row inside the inventory screen too (so you can craft with hotbar items).
        if (this.inventoryHotbarEl) {
            this.inventoryHotbarEl.innerHTML = '';
            for (let i = 0; i < 9; i++) {
                const item = this.inventory.slots[i];
                const slotEl = document.createElement('div');
                slotEl.className = 'inv-slot';
                slotEl.addEventListener('click', (event) => this.handleSlotClick(i, event));
                if (item) {
                    this.renderItem(slotEl, item);
                }
                this.inventoryHotbarEl.appendChild(slotEl);
            }
        }

        if (this.inventoryGridEl) {
            this.inventoryGridEl.innerHTML = '';
            for (let i = 9; i < 36; i++) {
                const item = this.inventory.slots[i];
                const slotEl = document.createElement('div');
                slotEl.className = 'inv-slot';
                slotEl.addEventListener('click', (event) => this.handleSlotClick(i, event));
                if (item) {
                    this.renderItem(slotEl, item);
                }
                this.inventoryGridEl.appendChild(slotEl);
            }
        }

        this.checkRecipes();
        this.updateCraftingUI();
    }

    renderItem(container, item, showLabel = false) {
        // Clear container
        container.innerHTML = '';
        container.style.position = 'relative';

        const toolDef = ITEM_DEFINITIONS[item.type];
        
        if (toolDef) {
            // It's a tool or armor - render pixel icon
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            canvas.style.width = '24px'; // Slightly larger for tools
            canvas.style.height = '24px';
            canvas.style.margin = 'auto';
            canvas.style.imageRendering = 'pixelated';
            
            const ctx = canvas.getContext('2d');
            let pattern;
            let palette;
            
            if (toolDef.type === 'armor') {
                pattern = ITEM_PATTERNS[toolDef.part];
                palette = {
                    'S': '#6d4c41',
                    'M': '#' + toolDef.tier.color.toString(16).padStart(6, '0')
                };
            } else if (toolDef.type === 'bed') {
                pattern = ITEM_PATTERNS.bed;
                palette = {
                    'W': '#ff5555', // Red wool
                    'S': '#8d6e63'  // Wood
                };
            } else if (toolDef.type === 'chest') {
                pattern = ITEM_PATTERNS.chest;
                palette = {
                    'S': '#8b6914', // Wood
                    'M': '#4a4a4a'  // Lock
                };
            } else if (toolDef.type === 'door') {
                pattern = ITEM_PATTERNS.door;
                palette = {
                    'S': '#8d6e63', // Wood
                    'M': '#4a4a4a'  // Handle
                };
            } else {
                pattern = ITEM_PATTERNS[toolDef.type];
                palette = {
                    'S': '#6d4c41', // Stick
                    'M': '#' + toolDef.tier.color.toString(16).padStart(6, '0') // Material color
                };
            }
            
            if (pattern) {
                // Draw 8x8 pattern scaled up
                const scale = 4; // 32 / 8 = 4
                
                // Center offset if pattern is smaller than 8x8 (though most are 8x8 or similar)
                // We assume 8x8 grid max for icons
                
                for (let y = 0; y < pattern.length; y++) {
                    for (let x = 0; x < pattern[y].length; x++) {
                        const char = pattern[y][x];
                        if (char !== ' ' && palette[char]) {
                            ctx.fillStyle = palette[char];
                            ctx.fillRect(x * scale, y * scale, scale, scale);
                        }
                    }
                }
            }
            
            container.appendChild(canvas);
        } else {
            // It's a block - render colored square
            const icon = document.createElement('div');
            icon.style.width = '20px';
            icon.style.height = '20px';
            icon.style.backgroundColor = this.getBlockColor(item.type);
            icon.style.margin = 'auto';
            icon.style.borderRadius = '3px';
            // Add simple bevel effect
            icon.style.border = '2px solid rgba(0,0,0,0.1)';
            icon.style.borderTop = '2px solid rgba(255,255,255,0.2)';
            icon.style.borderLeft = '2px solid rgba(255,255,255,0.2)';
            
            container.appendChild(icon);
        }

        const count = document.createElement('div');
        count.innerText = item.count || 1;
        count.style.fontSize = '10px';
        count.style.position = 'absolute';
        count.style.bottom = '0';
        count.style.right = '0';
        count.style.color = 'white';
        count.style.fontWeight = 'bold';
        count.style.textShadow = '1px 1px 0 #000';

        const toolInfo = this.getToolInfo(item.type);
        let title = this.getBlockName(item.type);
        
        // Show durability for tools
        if (toolInfo && item.durability !== undefined) {
            count.innerText = `${item.durability}/${toolInfo.maxDurability}`;
            count.style.fontSize = '8px';
            title += ` (${item.durability}/${toolInfo.maxDurability})`;
            
            // Durability bar
            const durabilityBar = document.createElement('div');
            durabilityBar.style.position = 'absolute';
            durabilityBar.style.bottom = '-2px'; // Below the item
            durabilityBar.style.left = '2px';
            durabilityBar.style.right = '2px';
            durabilityBar.style.height = '2px';
            durabilityBar.style.backgroundColor = '#333';
            
            const durabilityFill = document.createElement('div');
            const durabilityPercent = item.durability / toolInfo.maxDurability;
            durabilityFill.style.width = `${durabilityPercent * 100}%`;
            durabilityFill.style.height = '100%';
            durabilityFill.style.backgroundColor = durabilityPercent > 0.5 ? '#4caf50' : durabilityPercent > 0.2 ? '#ff9800' : '#f44336';
            
            durabilityBar.appendChild(durabilityFill);
            container.appendChild(durabilityBar);
        }
        
        container.title = title;
        container.dataset.itemType = item.type;
        if (!toolInfo || item.count > 1) {
            container.appendChild(count);
        }
        
        // Add label if requested
        if (showLabel) {
            const label = document.createElement('div');
            label.style.position = 'absolute';
            label.style.bottom = '-18px';
            label.style.left = '-10px'; // Allow spill
            label.style.right = '-10px';
            label.style.fontSize = '10px';
            label.style.color = '#fff';
            label.style.textAlign = 'center';
            label.style.textShadow = '1px 1px 2px #000';
            label.style.whiteSpace = 'nowrap';
            label.style.overflow = 'hidden';
            label.style.textOverflow = 'ellipsis';
            label.innerText = this.getBlockName(item.type);
            container.appendChild(label);
        }
    }

    getToolInfo(itemType) {
        const tools = {
            // Wooden tools
            20: { type: 'pickaxe', tier: 'wood', speed: 2, maxDurability: 60 },
            21: { type: 'axe', tier: 'wood', speed: 2, maxDurability: 60 },
            22: { type: 'shovel', tier: 'wood', speed: 2, maxDurability: 60 },
            23: { type: 'sword', tier: 'wood', speed: 1.5, maxDurability: 60 },
            // Stone tools
            24: { type: 'pickaxe', tier: 'stone', speed: 4, maxDurability: 132 },
            25: { type: 'axe', tier: 'stone', speed: 4, maxDurability: 132 },
            26: { type: 'shovel', tier: 'stone', speed: 4, maxDurability: 132 },
            27: { type: 'sword', tier: 'stone', speed: 3, maxDurability: 132 },
            // Iron tools
            28: { type: 'pickaxe', tier: 'iron', speed: 6, maxDurability: 251 },
            29: { type: 'axe', tier: 'iron', speed: 6, maxDurability: 251 },
            30: { type: 'shovel', tier: 'iron', speed: 6, maxDurability: 251 },
            31: { type: 'sword', tier: 'iron', speed: 4, maxDurability: 251 },
            // Diamond tools
            32: { type: 'pickaxe', tier: 'diamond', speed: 8, maxDurability: 1562 },
            33: { type: 'axe', tier: 'diamond', speed: 8, maxDurability: 1562 },
            34: { type: 'shovel', tier: 'diamond', speed: 8, maxDurability: 1562 },
            35: { type: 'sword', tier: 'diamond', speed: 6, maxDurability: 1562 },
            // Iron Armor
            54: { type: 'armor', part: 'helmet', tier: 'iron', maxDurability: 165 },
            55: { type: 'armor', part: 'chestplate', tier: 'iron', maxDurability: 240 },
            56: { type: 'armor', part: 'leggings', tier: 'iron', maxDurability: 225 },
            57: { type: 'armor', part: 'boots', tier: 'iron', maxDurability: 195 },
            // Diamond Armor
            58: { type: 'armor', part: 'helmet', tier: 'diamond', maxDurability: 363 },
            59: { type: 'armor', part: 'chestplate', tier: 'diamond', maxDurability: 528 },
            60: { type: 'armor', part: 'leggings', tier: 'diamond', maxDurability: 495 },
            61: { type: 'armor', part: 'boots', tier: 'diamond', maxDurability: 429 }
        };
        return tools[itemType] || null;
    }

    handleSlotClick(index, event) {
        const item = this.inventory.slots[index];
        if (!item) return;

        if (event && event.shiftKey) {
            const moved = index >= 9
                ? this.inventory.moveToHotbar(index)
                : this.inventory.moveToMain(index);
            if (moved) this.updateInventoryUI();
            return;
        }

        this.moveToCrafting(index);
    }

    moveToCrafting(index) {
        const slot = this.inventory.slots[index];
        if (!slot) return;
        
        // Try to find existing slot with same type to stack
        let destination = -1;
        for (let i = 0; i < this.craftSlots.length; i++) {
            if (this.craftSlots[i] && this.craftSlots[i].type === slot.type) {
                destination = i;
                break;
            }
        }
        
        // If no existing slot, find empty one
        if (destination === -1) {
            destination = this.findEmptyCraftSlot();
        }
        
        if (destination === -1) return;

        const consumed = this.inventory.consumeSlot(index);
        if (!consumed) return;

        // Add or stack
        if (this.craftSlots[destination]) {
            this.craftSlots[destination].count += 1;
        } else {
            this.craftSlots[destination] = { type: slot.type, count: 1 };
        }

        this.checkRecipes();
        this.updateInventoryUI();
    }

    findCraftSlotFor(type) {
        // Not used anymore, but keeping for compatibility
        return -1;
    }

    findEmptyCraftSlot() {
        for (let i = 0; i < this.craftSlots.length; i++) {
            if (!this.craftSlots[i]) return i;
        }
        return -1;
    }

    returnCraftingSlot(index) {
        const data = this.craftSlots[index];
        if (!data) return;
        const added = this.inventory.add(data.type, data.count, { skipUI: true });
        if (!added) return;
        this.craftSlots[index] = null;
        this.checkRecipes();
        this.updateInventoryUI();
    }

    checkRecipes() {
        this.craftResult = null;
        for (const recipe of this.recipes) {
            if (this.matchesRecipe(recipe)) {
                this.craftResult = recipe;
                return;
            }
        }
    }

    matchesRecipe(recipe) {
        // Count total items in craft slots
        const craftCounts = {};
        let totalItems = 0;
        for (const slot of this.craftSlots) {
            if (slot) {
                craftCounts[slot.type] = (craftCounts[slot.type] || 0) + slot.count;
                totalItems += slot.count;
            }
        }
        
        // Check if we have exactly what recipe needs
        let recipeTotal = 0;
        for (const input of recipe.inputs) {
            recipeTotal += input.count;
            const available = craftCounts[input.type] || 0;
            if (available < input.count) {
                return false;
            }
        }
        
        // Make sure we don't have extra items
        if (totalItems !== recipeTotal) {
            return false;
        }
        
        // Check that we only have recipe ingredients
        for (const type in craftCounts) {
            const needed = recipe.inputs.find(i => i.type === parseInt(type));
            if (!needed) {
                return false;
            }
            if (craftCounts[type] !== needed.count) {
                return false;
            }
        }
        
        return true;
    }

    completeCraft() {
        if (!this.craftResult) return;
        const { type, count } = this.craftResult.result;
        if (!this.inventory.canAdd(type, count)) return;

        for (const input of this.craftResult.inputs) {
            let remaining = input.count;
            for (let i = 0; i < this.craftSlots.length && remaining > 0; i++) {
                const slot = this.craftSlots[i];
                if (slot && slot.type === input.type) {
                    const used = Math.min(slot.count, remaining);
                    slot.count -= used;
                    remaining -= used;
                    if (slot.count === 0) {
                        this.craftSlots[i] = null;
                    }
                }
            }
        }

        // Check if crafted item is a tool and add with durability
        const toolInfo = this.getToolInfo(type);
        if (toolInfo) {
            this.inventory.add(type, count, { skipUI: true, durability: toolInfo.maxDurability });
        } else {
            this.inventory.add(type, count, { skipUI: true });
        }
        
        this.checkRecipes();
        this.updateInventoryUI();
    }

    updateCraftingUI() {
        const craftSlots = document.querySelectorAll('#crafting-panel .crafting-slot');
        craftSlots.forEach((slotEl, idx) => {
            slotEl.innerHTML = '';
            const item = this.craftSlots[idx];
            if (item) this.renderItem(slotEl, item);
            slotEl.onclick = () => this.returnCraftingSlot(idx);
        });

        const resultSlot = document.getElementById('crafting-result');
        const recipeName = document.getElementById('crafting-result-name');
        if (recipeName) {
            recipeName.innerText = this.craftResult ? this.craftResult.name : 'Рецепт не знайдено';
        }

        if (resultSlot) {
            resultSlot.innerHTML = '';
            if (this.craftResult) {
                this.renderItem(resultSlot, this.craftResult.result);
                resultSlot.onclick = () => this.completeCraft();
                resultSlot.style.cursor = 'pointer';
                resultSlot.title = `Створити ${this.craftResult.name}`;
            } else {
                resultSlot.onclick = null;
                resultSlot.style.cursor = 'default';
                resultSlot.title = '';
            }
        }
    }
}
