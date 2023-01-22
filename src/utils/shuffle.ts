import { getRandomIntFromRange } from './getRandomIntFromRange';

export const shuffle = <T>(originalArray: T[]) => {
    const array: T[] = [...originalArray];

    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomIntFromRange(0, i + 1);

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array as typeof originalArray;
};
