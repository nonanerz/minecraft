// Shared definitions for items, tools, and their visual properties

export const TOOL_TYPES = {
    PICKAXE: 'pickaxe',
    AXE: 'axe',
    SHOVEL: 'shovel',
    SWORD: 'sword',
    ARMOR: 'armor'
};

export const MATERIALS = {
    WOOD: { name: 'wood', color: 0x8d6e63 },
    STONE: { name: 'stone', color: 0x9e9e9e },
    IRON: { name: 'iron', color: 0xe0e0e0 },
    DIAMOND: { name: 'diamond', color: 0x4dd0e1 }
};

// Pixel patterns for tools (8x8 grid usually)
// M = Material, S = Stick
export const ITEM_PATTERNS = {
    pickaxe: [
        "MMMMM",
        " M M ",
        "  S  ",
        "  S  ",
        "  S  ",
        "  S  ",
        "  S  ",
        "  S  "
    ],
    axe: [
        " MM",
        "MMM",
        "MS ",
        " S ",
        " S ",
        " S ",
        " S ",
        " S "
    ],
    shovel: [
        " M ",
        "MMM",
        "MMM",
        " S ",
        " S ",
        " S ",
        " S ",
        " S "
    ],
    sword: [
        " M ",
        " M ",
        " M ",
        " M ",
        " M ",
        "SMS",
        " S ",
        " S "
    ],
    // Simple armor icons (approximate)
    helmet: [
        "MMMMM",
        "M   M",
        "M   M",
        "     ",
        "     ",
        "     ",
        "     ",
        "     "
    ],
    chestplate: [
        "M   M",
        "MMMMM",
        "MMMMM",
        "MMMMM",
        "MMMMM",
        "     ",
        "     ",
        "     "
    ],
    leggings: [
        "MMMMM",
        "MMMMM",
        "M   M",
        "M   M",
        "M   M",
        "     ",
        "     ",
        "     "
    ],
    boots: [
        "     ",
        "     ",
        "M   M",
        "M   M",
        "M   M",
        "     ",
        "     ",
        "     "
    ],
    bed: [
        "WWWWW",
        "WWWWW",
        "SSSSS",
        "S   S",
        "     ",
        "     ",
        "     ",
        "     "
    ],
    chest: [
        "SSSSS",
        "S   S",
        "S M S",
        "S   S",
        "SSSSS",
        "     ",
        "     ",
        "     "
    ],
    door: [
        "SS",
        "SM",
        "SS",
        "SM",
        "SS",
        "SM",
        "SS",
        "  "
    ]
};

export const ITEM_DEFINITIONS = {
    // Tools - Wooden
    20: { type: TOOL_TYPES.PICKAXE, tier: MATERIALS.WOOD, id: 20 },
    21: { type: TOOL_TYPES.AXE, tier: MATERIALS.WOOD, id: 21 },
    22: { type: TOOL_TYPES.SHOVEL, tier: MATERIALS.WOOD, id: 22 },
    23: { type: TOOL_TYPES.SWORD, tier: MATERIALS.WOOD, id: 23 },
    // Tools - Stone
    24: { type: TOOL_TYPES.PICKAXE, tier: MATERIALS.STONE, id: 24 },
    25: { type: TOOL_TYPES.AXE, tier: MATERIALS.STONE, id: 25 },
    26: { type: TOOL_TYPES.SHOVEL, tier: MATERIALS.STONE, id: 26 },
    27: { type: TOOL_TYPES.SWORD, tier: MATERIALS.STONE, id: 27 },
    // Tools - Iron
    28: { type: TOOL_TYPES.PICKAXE, tier: MATERIALS.IRON, id: 28 },
    29: { type: TOOL_TYPES.AXE, tier: MATERIALS.IRON, id: 29 },
    30: { type: TOOL_TYPES.SHOVEL, tier: MATERIALS.IRON, id: 30 },
    31: { type: TOOL_TYPES.SWORD, tier: MATERIALS.IRON, id: 31 },
    // Tools - Diamond
    32: { type: TOOL_TYPES.PICKAXE, tier: MATERIALS.DIAMOND, id: 32 },
    33: { type: TOOL_TYPES.AXE, tier: MATERIALS.DIAMOND, id: 33 },
    34: { type: TOOL_TYPES.SHOVEL, tier: MATERIALS.DIAMOND, id: 34 },
    35: { type: TOOL_TYPES.SWORD, tier: MATERIALS.DIAMOND, id: 35 },
    
    // Armor - Iron
    54: { type: TOOL_TYPES.ARMOR, part: 'helmet', tier: MATERIALS.IRON, id: 54 },
    55: { type: TOOL_TYPES.ARMOR, part: 'chestplate', tier: MATERIALS.IRON, id: 55 },
    56: { type: TOOL_TYPES.ARMOR, part: 'leggings', tier: MATERIALS.IRON, id: 56 },
    57: { type: TOOL_TYPES.ARMOR, part: 'boots', tier: MATERIALS.IRON, id: 57 },
    // Armor - Diamond
    58: { type: TOOL_TYPES.ARMOR, part: 'helmet', tier: MATERIALS.DIAMOND, id: 58 },
    59: { type: TOOL_TYPES.ARMOR, part: 'chestplate', tier: MATERIALS.DIAMOND, id: 59 },
    60: { type: TOOL_TYPES.ARMOR, part: 'leggings', tier: MATERIALS.DIAMOND, id: 60 },
    61: { type: TOOL_TYPES.ARMOR, part: 'boots', tier: MATERIALS.DIAMOND, id: 61 },
    // Special items
    70: { type: 'bed', id: 70 },
    71: { type: 'chest', id: 71 },
    72: { type: 'door', id: 72 }
};

