import { TILE_WIND } from '../tileTypes';

export const isTileWind = (value: string): value is TILE_WIND => {
    return value === 'E' || value === 'S' || value === 'W' || value === 'N';
};
