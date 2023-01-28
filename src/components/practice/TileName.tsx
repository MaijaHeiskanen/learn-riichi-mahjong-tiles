import { Card, useMantineTheme, Text } from '@mantine/core';
import { KeyboardEventHandler } from 'react';
import { getTileName } from '../tiles/tiles';
import { OptionProps } from './Game';
import { getOptionStyles } from './utils/getOptionStyles';

type TileNameProps = {} & OptionProps;

export const TileName = ({
    code,
    onClick,
    disabled,
    greenOutline,
    redOutline,
}: TileNameProps) => {
    const theme = useMantineTheme();

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

    return (
        <Card
            withBorder
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
            <Text>{getTileName(code)}</Text>
        </Card>
    );
};
