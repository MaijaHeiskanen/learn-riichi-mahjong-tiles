import { Suit } from '../hooks/useGameSettings';

export const mapSuitCodeToSuitColor = (suit: Suit) => {
    switch (suit) {
        case 'M':
            return 'red';
        case 'P':
            return 'yellow';
        case 'S':
            return 'lime';
        case 'W':
            return 'blue';
        case 'D':
            return 'blue';
        default:
            return undefined;
    }
};
