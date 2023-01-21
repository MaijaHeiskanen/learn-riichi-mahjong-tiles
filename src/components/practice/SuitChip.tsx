import { Chip } from '@mantine/core';
import { Suit } from '../tiles/tileTypes';
import { mapSuitCodeToSuitColor } from './utils/mapSuitCodeToSuitColor';
import { mapSuitCodeToSuitName } from './utils/mapSuitCodeToSuitName';

type SuitChipProps = {
    suit: Suit;
    checked: boolean;
    checkedChanged: (newValue: boolean) => void;
};

export const SuitChip = ({ suit, checked, checkedChanged }: SuitChipProps) => {
    return (
        <Chip
            size="md"
            variant="filled"
            color={mapSuitCodeToSuitColor(suit)}
            checked={checked}
            onChange={() => checkedChanged(!checked)}
        >
            {mapSuitCodeToSuitName(suit)}
        </Chip>
    );
};
