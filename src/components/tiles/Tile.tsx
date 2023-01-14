import { ThemeIcon } from '@mantine/core';

import { ReactComponent as Blank } from './../../svgs/white_tiles/Blank.svg';

import { ReactComponent as Man1 } from './../../svgs/white_tiles/Man1.svg';
import { ReactComponent as Man2 } from './../../svgs/white_tiles/Man2.svg';
import { ReactComponent as Man3 } from './../../svgs/white_tiles/Man3.svg';
import { ReactComponent as Man4 } from './../../svgs/white_tiles/Man4.svg';
import { ReactComponent as Man5 } from './../../svgs/white_tiles/Man5.svg';
import { ReactComponent as Man5Dora } from './../../svgs/white_tiles/Man5-Dora.svg';
import { ReactComponent as Man6 } from './../../svgs/white_tiles/Man6.svg';
import { ReactComponent as Man7 } from './../../svgs/white_tiles/Man7.svg';
import { ReactComponent as Man8 } from './../../svgs/white_tiles/Man8.svg';
import { ReactComponent as Man9 } from './../../svgs/white_tiles/Man9.svg';

import { ReactComponent as Pin1 } from './../../svgs/white_tiles/Man1.svg';
import { ReactComponent as Pin2 } from './../../svgs/white_tiles/Pin2.svg';
import { ReactComponent as Pin3 } from './../../svgs/white_tiles/Pin3.svg';
import { ReactComponent as Pin4 } from './../../svgs/white_tiles/Pin4.svg';
import { ReactComponent as Pin5 } from './../../svgs/white_tiles/Pin5.svg';
import { ReactComponent as Pin5Dora } from './../../svgs/white_tiles/Pin5-Dora.svg';
import { ReactComponent as Pin6 } from './../../svgs/white_tiles/Pin6.svg';
import { ReactComponent as Pin7 } from './../../svgs/white_tiles/Pin7.svg';
import { ReactComponent as Pin8 } from './../../svgs/white_tiles/Pin8.svg';
import { ReactComponent as Pin9 } from './../../svgs/white_tiles/Pin9.svg';

import { ReactComponent as Sou1 } from './../../svgs/white_tiles/Man1.svg';
import { ReactComponent as Sou2 } from './../../svgs/white_tiles/Sou2.svg';
import { ReactComponent as Sou3 } from './../../svgs/white_tiles/Sou3.svg';
import { ReactComponent as Sou4 } from './../../svgs/white_tiles/Sou4.svg';
import { ReactComponent as Sou5 } from './../../svgs/white_tiles/Sou5.svg';
import { ReactComponent as Sou5Dora } from './../../svgs/white_tiles/Sou5-Dora.svg';
import { ReactComponent as Sou6 } from './../../svgs/white_tiles/Sou6.svg';
import { ReactComponent as Sou7 } from './../../svgs/white_tiles/Sou7.svg';
import { ReactComponent as Sou8 } from './../../svgs/white_tiles/Sou8.svg';
import { ReactComponent as Sou9 } from './../../svgs/white_tiles/Sou9.svg';

import { ReactComponent as Ton } from './../../svgs/white_tiles/Ton.svg';
import { ReactComponent as Nan } from './../../svgs/white_tiles/Nan.svg';
import { ReactComponent as Shaa } from './../../svgs/white_tiles/Shaa.svg';
import { ReactComponent as Pei } from './../../svgs/white_tiles/Pei.svg';

import { ReactComponent as Chun } from './../../svgs/white_tiles/Chun.svg';
import { ReactComponent as Haku } from './../../svgs/white_tiles/Haku.svg';
import { ReactComponent as Hatsu } from './../../svgs/white_tiles/Hatsu.svg';

type TILE_NUMBERS_1_TO_9 =
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '5d'
    | '6'
    | '7'
    | '8'
    | '9';

type SUIT_TILES = {
    [key in TILE_NUMBERS_1_TO_9]: JSX.Element;
};

type TILE_WINDS = 'E' | 'S' | 'W' | 'N';

type WIND_TILES = {
    [key in `W${TILE_WINDS}`]: JSX.Element;
};

type TILE_DRAGONS = 'R' | 'W' | 'G';

type DRAGON_TILES = {
    [key in `D${TILE_DRAGONS}`]: JSX.Element;
};

type TILES =
    | `M${TILE_NUMBERS_1_TO_9}`
    | `P${TILE_NUMBERS_1_TO_9}`
    | `S${TILE_NUMBERS_1_TO_9}`
    | `W${TILE_WINDS}`
    | `D${TILE_DRAGONS}`;

const isTileNumber = (value: string): value is TILE_NUMBERS_1_TO_9 => {
    return (
        value === '1' ||
        value === '2' ||
        value === '3' ||
        value === '4' ||
        value === '5' ||
        value === '5d' ||
        value === '6' ||
        value === '7' ||
        value === '8' ||
        value === '9'
    );
};

const isTileWind = (value: string): value is TILE_WINDS => {
    return value === 'E' || value === 'S' || value === 'W' || value === 'N';
};

const isTileDragon = (value: string): value is TILE_DRAGONS => {
    return value === 'R' || value === 'W' || value === 'G';
};

const MAN_TILES: SUIT_TILES = {
    '1': <Man1 />,
    '2': <Man2 />,
    '3': <Man3 />,
    '4': <Man4 />,
    '5': <Man5 />,
    '5d': <Man5Dora />,
    '6': <Man6 />,
    '7': <Man7 />,
    '8': <Man8 />,
    '9': <Man9 />,
};

const PIN_TILES: SUIT_TILES = {
    '1': <Pin1 />,
    '2': <Pin2 />,
    '3': <Pin3 />,
    '4': <Pin4 />,
    '5': <Pin5 />,
    '5d': <Pin5Dora />,
    '6': <Pin6 />,
    '7': <Pin7 />,
    '8': <Pin8 />,
    '9': <Pin9 />,
};

const SOU_TILES: SUIT_TILES = {
    '1': <Sou1 />,
    '2': <Sou2 />,
    '3': <Sou3 />,
    '4': <Sou4 />,
    '5': <Sou5 />,
    '5d': <Sou5Dora />,
    '6': <Sou6 />,
    '7': <Sou7 />,
    '8': <Sou8 />,
    '9': <Sou9 />,
};

const WIND_TILES: WIND_TILES = {
    WE: <Ton />, // East
    WS: <Nan />, // South
    WW: <Shaa />, // West
    WN: <Pei />, // North
};

const DRAGON_TILES: DRAGON_TILES = {
    DR: <Chun />, // Red
    DW: <Haku />, // White
    DG: <Hatsu />, // Green
};

type TileProps = {
    code: TILES;
};

const mapStringToTile = (tile: TileProps['code']) => {
    const firstChar = tile[0];
    const rest = tile.slice(1);

    switch (firstChar) {
        case 'M':
            if (isTileNumber(rest)) {
                return MAN_TILES[rest];
            }
            break;

        case 'P':
            if (isTileNumber(rest)) {
                return PIN_TILES[rest];
            }
            break;

        case 'S':
            if (isTileNumber(rest)) {
                return SOU_TILES[rest];
            }
            break;

        case 'W':
            if (isTileWind(rest)) {
                return WIND_TILES[`${firstChar}${rest}`];
            }
            break;

        case 'D':
            if (isTileDragon(rest)) {
                return DRAGON_TILES[`${firstChar}${rest}`];
            }
            break;
        default:
            return <Blank />;
    }
};

export const Tile = ({ code }: TileProps) => {
    return (
        <ThemeIcon h={100} w={75} color={'white'}>
            {mapStringToTile(code)}
        </ThemeIcon>
    );
};
