import { GAME_TYPES } from './consts';

export const mapGameTypeToNameAndDescription = (type: GAME_TYPES) => {
    switch (type) {
        case GAME_TYPES.SELECT_SUIT_FOR_TILE:
            return {
                name: 'Select a matching suit for a tile',
                description:
                    'You are shown a tile and the three existing suits. You need to choose the suit matching the tile.',
            };
        case GAME_TYPES.SELECT_NAME_FOR_TILE:
            return {
                name: 'Select a matching tile for a name',
                description:
                    'You are given a tile and three possible names for it. You need to choose the name matching the tile.',
            };
        case GAME_TYPES.SELECT_TILE_FOR_NAME:
            return {
                name: 'Select a matching tile for a name',
                description:
                    'You are given a tile name and three possible tiles. You need to choose the tile matching the name.',
            };
        case GAME_TYPES.WRITE_NAME_FOR_TILE:
            return {
                name: 'Write a name of a tile',
                description:
                    'You are shown a tile. You need to to write the name of the tile.',
            };
    }
};
