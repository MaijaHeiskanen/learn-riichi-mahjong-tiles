import { Badge, MantineColor } from '@mantine/core';
import { INCLUDED_TILES } from './consts';

export const mapTileTypeToBadge = (tileType: INCLUDED_TILES, key?: string) => {
    const props: {
        text: string;
        color: MantineColor;
    } = {
        text: 'Unknown type',
        color: 'gray',
    };
    switch (tileType) {
        case INCLUDED_TILES.MAN:
            props.text = 'Man';
            props.color = 'red';
            break;
        case INCLUDED_TILES.PIN:
            props.text = 'Pin';
            props.color = 'violet';
            break;
        case INCLUDED_TILES.SOU:
            props.text = 'Sou';
            props.color = 'lime';
            break;
        case INCLUDED_TILES.WINDS:
            props.text = 'Winds';
            props.color = 'blue';
            break;
        case INCLUDED_TILES.DRAGONS:
            props.text = 'Dragons';
            props.color = 'yellow';
            break;
    }

    return (
        <Badge key={key ?? tileType} color={props.color}>
            {props.text}
        </Badge>
    );
};
