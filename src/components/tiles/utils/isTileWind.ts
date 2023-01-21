import { WindTileCode } from '../tileCodes';

export const isTileWind = (value: string): value is WindTileCode => {
    return value === 'E' || value === 'S' || value === 'W' || value === 'N';
};
