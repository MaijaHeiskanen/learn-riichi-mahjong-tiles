import { Stack, ThemeIcon, Text, useMantineTheme } from '@mantine/core';
import { KeyboardEventHandler, useEffect, useState } from 'react';
import { getRandomIntFromRange } from '../../utils/getRandomIntFromRange';
import { OptionProps } from '../practice/Game';
import { getOptionStyles } from '../practice/utils/getOptionStyles';
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
} & OptionProps;

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
    const [properties, setProperties] = useState(
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

    useEffect(() => {
        if (!onClick && rotateRandomly) {
            setProperties(getHeightWidthRotation(true));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code]);

    const { rotation, width, height } = properties;

    const tile = (
        <Stack
            tabIndex={onClick ? 0 : -1}
            onKeyDown={onClick ? handleKeyDown : undefined}
            onClick={onClick ? tileClicked : undefined}
            sx={getOptionStyles({
                theme,
                clickable: Boolean(onClick),
                greenOutline: Boolean(greenOutline),
                redOutline: Boolean(redOutline),
            })}
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
