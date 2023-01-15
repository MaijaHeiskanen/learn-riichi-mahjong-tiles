import { TILE_DRAGON } from '../tileTypes';

export const mapDragonLetterToName = (letter: TILE_DRAGON) => {
    switch (letter) {
        case 'R':
            return 'Red';
        case 'W':
            return 'White';
        case 'G':
            return 'Green';
    }
};
