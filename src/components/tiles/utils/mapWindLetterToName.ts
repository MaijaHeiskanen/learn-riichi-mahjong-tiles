import { TILE_WIND } from '../tileTypes';

export const mapWindLetterToName = (letter: TILE_WIND) => {
    switch (letter) {
        case 'E':
            return 'East';
        case 'S':
            return 'South';
        case 'W':
            return 'West';
        case 'N':
            return 'North';
    }
};
