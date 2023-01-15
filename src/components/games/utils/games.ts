import { GAME_TYPES, HONORS, INCLUDED_TILES, SUITS } from './consts';

export type Game = {
    type: GAME_TYPES;
    value: string;
    modes: Array<{
        difficulty: 1 | 2 | 3 | 4 | 5;
        includes: INCLUDED_TILES[];
    }>;
};

export type GameSettings = {
    type: Game['type'];
    includes: Game['modes'][number]['includes'];
    difficulty: number;
};

export const GAMES: Game[] = [
    {
        type: GAME_TYPES.SELECT_SUIT_FOR_TILE,
        value: '1',
        modes: [
            {
                difficulty: 1,
                includes: [...SUITS],
            },
            {
                difficulty: 2,
                includes: [...SUITS, ...HONORS],
            },
        ],
    },
    {
        type: GAME_TYPES.WRITE_NAME_FOR_TILE,
        value: '5',
        modes: [
            {
                difficulty: 5,
                includes: [...SUITS, ...HONORS],
            },
        ],
    },
    {
        type: GAME_TYPES.SELECT_NAME_FOR_TILE,
        value: '2',
        modes: [
            {
                difficulty: 2,
                includes: [...SUITS],
            },
            {
                difficulty: 3,
                includes: [...SUITS, ...HONORS],
            },
            {
                difficulty: 4,
                includes: [INCLUDED_TILES.MAN],
            },
            {
                difficulty: 4,
                includes: [...HONORS],
            },
            {
                difficulty: 5,
                includes: [INCLUDED_TILES.MAN, INCLUDED_TILES.WINDS],
            },
        ],
    },

    {
        type: GAME_TYPES.SELECT_TILE_FOR_NAME,
        value: '2',
        modes: [
            {
                difficulty: 2,
                includes: [...SUITS],
            },
            {
                difficulty: 3,
                includes: [...SUITS, ...HONORS],
            },
            {
                difficulty: 4,
                includes: [INCLUDED_TILES.MAN],
            },
            {
                difficulty: 4,
                includes: [...HONORS],
            },
            {
                difficulty: 5,
                includes: [INCLUDED_TILES.MAN, INCLUDED_TILES.WINDS],
            },
        ],
    },
];
