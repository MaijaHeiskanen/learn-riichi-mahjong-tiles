import { Stack, ThemeIcon, Text, useMantineTheme } from '@mantine/core';
import { KeyboardEventHandler, useState } from 'react';
import { getRandomIntFromRange } from '../../utils/getRandomIntFromRange';
import { TileCode } from './tileCodes';
import { getTileComponent, getTileName } from './tiles';

const ROTATIONS = [0, 90, 180, 270] as const;

const getRandomRotation = () => {
    return ROTATIONS[getRandomIntFromRange(0, ROTATIONS.length)];
};

const getHeightWidthRotation = (rotateRandomly: boolean) => {
    const rotation = rotateRandomly ? getRandomRotation() : 0;

    if (rotation % 180 === 0) {
        return {
            rotation,
            width: 75,
            height: 100,
        };
    }

    return {
        rotation,
        width: 100,
        height: 75,
    };
};

export type TileProps = {
    code: TileCode;
    showName?: boolean;
    onClick?: (code: TileCode) => void;
    greenOutline?: boolean;
    redOutline?: boolean;
    rotateRandomly?: boolean;
    disabled?: boolean;
};

export const Tile = ({
    code,
    showName,
    onClick,
    greenOutline,
    redOutline,
    rotateRandomly,
    disabled,
}: TileProps) => {
    const theme = useMantineTheme();
    const [properties] = useState(
        getHeightWidthRotation(rotateRandomly ?? false)
    );

    const handleKeyDown: KeyboardEventHandler = event => {
        if (disabled) return;

        if (event.key === 'Enter') {
            onClick!(code);
        }
    };

    const tileClicked = () => {
        if (disabled) return;

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

    const { rotation, width, height } = properties;

    const tile = (
        <Stack
            tabIndex={onClick ? 0 : -1}
            onKeyDown={onClick ? handleKeyDown : undefined}
            onClick={onClick ? tileClicked : undefined}
            sx={
                onClick
                    ? {
                          borderRadius: '4px',
                          ':focus': {
                              outline: `5px solid ${getOutlineColor()}`,
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
            <ThemeIcon p={5} h={height} w={width} color={'white'}>
                {getTileComponent(code, rotation)}
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
