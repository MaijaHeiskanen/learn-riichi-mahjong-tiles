import { Stack, ThemeIcon, Text, useMantineTheme } from '@mantine/core';
import { KeyboardEventHandler } from 'react';
import { TileCode } from './tileCodes';
import { getTileComponent, getTileName } from './tiles';

export type TileProps = {
    code: TileCode;
    showName?: boolean;
    onClick?: (code: TileCode) => void;
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
                {getTileComponent(code)}
            </ThemeIcon>
            {showName && (
                <Text size={'sm'} align="center">
                    {getTileName(code)}
                </Text>
            )}
        </Stack>
    );

    return tile;
};
