import {
    Button,
    Card,
    Center,
    Container,
    SimpleGrid,
    Stack,
    Title,
    Text,
    Flex,
    Rating,
    Group,
    MantineColor,
    Badge,
    Divider,
} from '@mantine/core';
import { useState } from 'react';

const enum GAME_TYPES {
    SELECT_SUIT_FOR_TILE,
    SELECT_NAME_FOR_TILE,
    SELECT_TILE_FOR_NAME,
    WRITE_NAME_FOR_TILE,
}

const enum INCLUDED_TILES {
    MAN,
    PIN,
    SOU,
    WINDS,
    DRAGONS,
}

const SUITS = [INCLUDED_TILES.MAN, INCLUDED_TILES.PIN, INCLUDED_TILES.SOU];
const HONORS = [INCLUDED_TILES.WINDS, INCLUDED_TILES.DRAGONS];

type Game = {
    type: GAME_TYPES;
    value: string;
    modes: Array<{
        difficulty: 1 | 2 | 3 | 4 | 5;
        includes: INCLUDED_TILES[];
    }>;
};

const GAMES: Game[] = [
    {
        type: GAME_TYPES.SELECT_SUIT_FOR_TILE,
        value: '1',
        modes: [
            {
                difficulty: 1,
                includes: [...SUITS],
            },
            {
                difficulty: 2,
                includes: [...SUITS, ...HONORS],
            },
        ],
    },
    {
        type: GAME_TYPES.WRITE_NAME_FOR_TILE,
        value: '5',
        modes: [
            {
                difficulty: 5,
                includes: [...SUITS, ...HONORS],
            },
        ],
    },
    {
        type: GAME_TYPES.SELECT_NAME_FOR_TILE,
        value: '2',
        modes: [
            {
                difficulty: 2,
                includes: [...SUITS],
            },
            {
                difficulty: 3,
                includes: [...SUITS, ...HONORS],
            },
            {
                difficulty: 4,
                includes: [INCLUDED_TILES.MAN],
            },
            {
                difficulty: 4,
                includes: [...HONORS],
            },
            {
                difficulty: 5,
                includes: [INCLUDED_TILES.MAN, INCLUDED_TILES.WINDS],
            },
        ],
    },

    {
        type: GAME_TYPES.SELECT_TILE_FOR_NAME,
        value: '2',
        modes: [
            {
                difficulty: 2,
                includes: [...SUITS],
            },
            {
                difficulty: 3,
                includes: [...SUITS, ...HONORS],
            },
            {
                difficulty: 4,
                includes: [INCLUDED_TILES.MAN],
            },
            {
                difficulty: 4,
                includes: [...HONORS],
            },
            {
                difficulty: 5,
                includes: [INCLUDED_TILES.MAN, INCLUDED_TILES.WINDS],
            },
        ],
    },
];

const mapTileTypeToBadge = (tileType: INCLUDED_TILES) => {
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

    return <Badge color={props.color}>{props.text}</Badge>;
};

const mapGameTypeToNameAndDescription = (type: GAME_TYPES) => {
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

type GameSettings = {
    type: GAME_TYPES;
    includes: INCLUDED_TILES[];
};

export const GameMenu = () => {
    const [game, setGame] = useState<GameSettings | null>(null);

    return (
        <Stack>
            <Title align="center">Practice with games</Title>
            <Container size={800} mb={20}>
                <Text size={'lg'} p={20}>
                    Play fun games and learn Riichi Tiles! Learn to recognize
                    all suits and honors. Learn to read the numbers of Man suit.
                    Learn to tell apart the different winds. Just choose a game
                    below and click "Start game"!
                </Text>
            </Container>
            <Center>
                <SimpleGrid
                    cols={2}
                    breakpoints={[{ maxWidth: 'md', cols: 1 }]}
                >
                    {GAMES.map(({ value, type, modes }) => {
                        const { name, description } =
                            mapGameTypeToNameAndDescription(type);

                        return (
                            <Container size={400} ml={0} mr={0} pl={0} pr={0}>
                                <Card>
                                    <Stack>
                                        <Title size={'h3'}>{name}</Title>
                                        <Text>{description}</Text>
                                        <Stack>
                                            {modes.map(
                                                (
                                                    { difficulty, includes },
                                                    index
                                                ) => {
                                                    return (
                                                        <>
                                                            <Divider />
                                                            <SimpleGrid
                                                                cols={2}
                                                                breakpoints={[
                                                                    {
                                                                        maxWidth: 400,
                                                                        cols: 1,
                                                                    },
                                                                ]}
                                                            >
                                                                <Stack>
                                                                    <Group
                                                                        spacing={
                                                                            'xs'
                                                                        }
                                                                    >
                                                                        {includes.map(
                                                                            value =>
                                                                                mapTileTypeToBadge(
                                                                                    value
                                                                                )
                                                                        )}
                                                                    </Group>
                                                                    <Rating
                                                                        defaultValue={
                                                                            difficulty
                                                                        }
                                                                        readOnly={
                                                                            true
                                                                        }
                                                                    />
                                                                </Stack>
                                                                <Center>
                                                                    <Button
                                                                        onClick={() =>
                                                                            setGame(
                                                                                {
                                                                                    type,
                                                                                    includes,
                                                                                }
                                                                            )
                                                                        }
                                                                    >
                                                                        {
                                                                            'Start game'
                                                                        }
                                                                    </Button>
                                                                </Center>
                                                            </SimpleGrid>
                                                        </>
                                                    );
                                                }
                                            )}
                                        </Stack>
                                    </Stack>
                                </Card>
                            </Container>
                        );
                    })}
                </SimpleGrid>
            </Center>
        </Stack>
    );
};
