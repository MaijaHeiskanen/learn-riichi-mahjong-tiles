import { TileProps } from '../Tile';
import {
    BLANK_TILE,
    DRAGON_TILES,
    MAN_TILES,
    PIN_TILES,
    SOU_TILES,
    WIND_TILES,
} from '../tiles';
import { isTileDragon } from './isTileDragon';
import { isTileNumber } from './isTIleNumber';
import { isTileWind } from './isTileWind';

export const mapStringToTile = (tile: TileProps['code']) => {
    const firstChar = tile[0];
    const rest = tile.slice(1);

    switch (firstChar) {
        case 'M':
            if (isTileNumber(rest)) {
                return MAN_TILES[rest];
            }
            return BLANK_TILE;

        case 'P':
            if (isTileNumber(rest)) {
                return PIN_TILES[rest];
            }
            return BLANK_TILE;

        case 'S':
            if (isTileNumber(rest)) {
                return SOU_TILES[rest];
            }
            return BLANK_TILE;

        case 'W':
            if (isTileWind(rest)) {
                return WIND_TILES[`${firstChar}${rest}`];
            }
            return BLANK_TILE;

        case 'D':
            if (isTileDragon(rest)) {
                return DRAGON_TILES[`${firstChar}${rest}`];
            }
            return BLANK_TILE;
        default:
            return BLANK_TILE;
    }
};
