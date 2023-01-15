import { TILE_NUMBERS_1_TO_9 } from '../tileTypes';

export const isTileNumber = (value: string): value is TILE_NUMBERS_1_TO_9 => {
    return (
        value === '1' ||
        value === '2' ||
        value === '3' ||
        value === '4' ||
        value === '5' ||
        value === '5d' ||
        value === '6' ||
        value === '7' ||
        value === '8' ||
        value === '9'
    );
};
