import { Suit } from '../../tiles/tileTypes';

export const mapSuitCodeToSuitName = (suit: Suit) => {
    switch (suit) {
        case 'M':
            return 'Man';
        case 'P':
            return 'Pin';
        case 'S':
            return 'Sou';
        case 'W':
            return 'Winds';
        case 'D':
            return 'Dragons';
        default:
            return 'Unknown suit';
    }
};
