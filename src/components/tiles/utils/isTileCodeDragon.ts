import { DragonTileCode } from '../tileCodes';

export const isTileCodeDragon = (value: string): value is DragonTileCode => {
    return value === 'R' || value === 'W' || value === 'G';
};
