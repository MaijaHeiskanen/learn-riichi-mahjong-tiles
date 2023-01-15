import { Stack, ThemeIcon, Text } from '@mantine/core';
import { KeyboardEventHandler } from 'react';
import { TILE } from './tileTypes';
import { mapStringToName } from './utils/mapStringToName';
import { mapStringToTile } from './utils/mapStringToTile';

export type TileProps = {
    code: TILE;
    showName?: boolean;
    onClick?: () => void;
};

export const Tile = ({ code, showName, onClick }: TileProps) => {
    const handleKeyDown: KeyboardEventHandler = event => {
        if (event.key === 'Enter') {
            onClick!();
        }
    };
    const tile = (
        <Stack
            tabIndex={0}
            onKeyDown={onClick ? handleKeyDown : undefined}
            onClick={onClick ? onClick : undefined}
        >
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

    return tile;
};
