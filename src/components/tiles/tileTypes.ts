export type TILE_NUMBERS_1_TO_9 =
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '5d'
    | '6'
    | '7'
    | '8'
    | '9';

export type SUIT_TILES = {
    [key in TILE_NUMBERS_1_TO_9]: JSX.Element;
};

export type TILE_WIND = 'E' | 'S' | 'W' | 'N';

export type WIND_TILES_TYPE = {
    [key in `W${TILE_WIND}`]: JSX.Element;
};

export type TILE_DRAGON = 'R' | 'W' | 'G';

export type DRAGON_TILES_TYPE = {
    [key in `D${TILE_DRAGON}`]: JSX.Element;
};

export type Suit = 'M' | 'P' | 'S' | 'W' | 'D';

export type TILE =
    | `M${TILE_NUMBERS_1_TO_9}`
    | `P${TILE_NUMBERS_1_TO_9}`
    | `S${TILE_NUMBERS_1_TO_9}`
    | `W${TILE_WIND}`
    | `D${TILE_DRAGON}`;
