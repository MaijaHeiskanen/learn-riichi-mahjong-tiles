import { TileProps } from '../Tile';
import { TILE_DRAGON, TILE_WIND } from '../tileTypes';
import { isDora } from './isDora';
import { isTileDragon } from './isTileDragon';
import { isTileNumber } from './isTIleNumber';
import { isTileWind } from './isTileWind';
import { mapDragonLetterToName } from './mapDragonLetterToName';
import { mapWindLetterToName } from './mapWindLetterToName';

export const mapStringToName = (tile: TileProps['code']) => {
    const firstChar = tile[0];
    const rest = tile.slice(1);

    let name = '';

    switch (firstChar) {
        case 'M':
            name += 'Man';
            if (isTileNumber(rest)) {
                if (isDora(rest)) {
                    return `${name} ${rest[0]} Red`;
                }

                return `${name} ${rest[0]}`;
            }
            return 'Unknown tile';

        case 'P':
            name += 'Pin';
            if (isTileNumber(rest)) {
                if (isDora(rest)) {
                    return `${name} ${rest[0]} Red`;
                }

                return `${name} ${rest[0]}`;
            }
            return 'Unknown tile';

        case 'S':
            name += 'Sou';
            if (isTileNumber(rest)) {
                if (isDora(rest)) {
                    return `${name} ${rest[0]} Red`;
                }

                return `${name} ${rest[0]}`;
            }
            return 'Unknown tile';

        case 'W':
            if (isTileWind(rest)) {
                return `${mapWindLetterToName(rest as TILE_WIND)}`;
            }
            return 'Unknown tile';

        case 'D':
            if (isTileDragon(rest)) {
                return `${mapDragonLetterToName(rest as TILE_DRAGON)} Dragon`;
            }
            return 'Unknown tile';

        default:
            return 'Unknown tile';
    }
};
