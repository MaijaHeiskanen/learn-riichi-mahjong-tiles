import { Stack, ThemeIcon, Text, useMantineTheme } from '@mantine/core';
import { createRef, KeyboardEventHandler, useEffect, useRef } from 'react';
import { TILE } from './tileTypes';
import { mapStringToName } from './utils/mapStringToName';
import { mapStringToTile } from './utils/mapStringToTile';

export type TileProps = {
    code: TILE;
    showName?: boolean;
    onClick?: (code: TILE) => void;
    greenOutline?: boolean;
    redOutline?: boolean;
};

export const Tile = ({
    code,
    showName,
    onClick,
    greenOutline,
    redOutline,
}: TileProps) => {
    const theme = useMantineTheme();

    const handleKeyDown: KeyboardEventHandler = event => {
        if (event.key === 'Enter') {
            onClick!(code);
        }
    };

    const tileClicked = () => {
        onClick!(code);
    };

    const getOutlineColor = () => {
        const blue = theme.colors.blue[4];
        const green = theme.colors.green[4];
        const red = theme.colors.red[4];

        if (greenOutline) {
            return green;
        }
        if (redOutline) {
            return red;
        }
        return blue;
    };

    const tile = (
        <Stack
            tabIndex={onClick ? 0 : -1}
            onKeyDown={onClick ? handleKeyDown : undefined}
            onClick={onClick ? tileClicked : undefined}
            sx={
                onClick
                    ? {
                          ':focus': {
                              outline: `5px solid ${getOutlineColor()}`,
                              borderRadius: '4px',
                          },
                          ':hover': {
                              cursor: 'pointer',
                          },
                          outline: `5px solid ${
                              greenOutline || redOutline
                                  ? getOutlineColor()
                                  : 'none'
                          }`,
                      }
                    : {}
            }
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
