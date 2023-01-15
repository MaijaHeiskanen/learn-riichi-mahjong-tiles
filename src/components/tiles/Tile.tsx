import { Stack, ThemeIcon, Text } from '@mantine/core';
import { TILE } from './tileTypes';
import { mapStringToName } from './utils/mapStringToName';
import { mapStringToTile } from './utils/mapStringToTile';

export type TileProps = {
    code: TILE;
    showName?: boolean;
};

export const Tile = ({ code, showName }: TileProps) => {
    return (
        <Stack>
            <ThemeIcon p={5} h={100} w={75} color={'white'}>
                {mapStringToTile(code)}
            </ThemeIcon>
            {showName && (
                <Text size={'sm'} align="center">
                    {mapStringToName(code)}
                </Text>
            )}
        </Stack>
    );
};
