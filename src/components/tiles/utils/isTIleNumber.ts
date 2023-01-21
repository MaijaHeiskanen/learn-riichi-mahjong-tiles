import { NumbersFrom1To9 } from './types';

export const isNumber = (value: string): value is NumbersFrom1To9 => {
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
