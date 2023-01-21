export const MAN_TILE_CODES = [
    'M1',
    'M2',
    'M3',
    'M4',
    'M5',
    'M5d',
    'M6',
    'M7',
    'M8',
    'M9',
] as const;
export type ManTileCode = typeof MAN_TILE_CODES[number];

export const PIN_TILE_CODES = [
    'P1',
    'P2',
    'P3',
    'P4',
    'P5',
    'P5d',
    'P6',
    'P7',
    'P8',
    'P9',
] as const;
export type PinTileCode = typeof PIN_TILE_CODES[number];

export const SOU_TILE_CODES = [
    'S1',
    'S2',
    'S3',
    'S4',
    'S5',
    'S5d',
    'S6',
    'S7',
    'S8',
    'S9',
] as const;
export type SouTileCode = typeof SOU_TILE_CODES[number];

export const WIND_TILE_CODES = ['WE', 'WS', 'WW', 'WN'] as const;
export type WindTileCode = typeof WIND_TILE_CODES[number];

export const DRAGON_TILE_CODES = ['DR', 'DG', 'DW'] as const;
export type DragonTileCode = typeof DRAGON_TILE_CODES[number];

export type TileCode =
    | ManTileCode
    | PinTileCode
    | SouTileCode
    | WindTileCode
    | DragonTileCode;
