import { Container } from '@mantine/core';
import { GameSettings } from './utils/games';
import { mapTileTypeToBadge } from './utils/mapTileTypeToBadge';

type SelectMatchingNameForTileProps = GameSettings;

export const SelectMatchingNameForTile = ({
    includes,
    type,
}: SelectMatchingNameForTileProps) => {
    return (
        <Container>{includes.map(type => mapTileTypeToBadge(type))}</Container>
    );
};
