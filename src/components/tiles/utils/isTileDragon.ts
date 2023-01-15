import { TILE_DRAGON } from '../tileTypes';

export const isTileDragon = (value: string): value is TILE_DRAGON => {
    return value === 'R' || value === 'W' || value === 'G';
};
