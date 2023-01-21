import {
    Button,
    Center,
    Group,
    Rating,
    SimpleGrid,
    Stack,
} from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import { Difficulty } from './Difficulty';
import { GAME_TYPES, INCLUDED_TILES } from './utils/consts';
import { GameSettings } from './utils/games';
import { mapTileTypeToBadge } from './utils/mapTileTypeToBadge';

type GameModeProps = {
    type: GAME_TYPES;
    difficulty: number;
    includes: INCLUDED_TILES[];
    setGame: Dispatch<SetStateAction<GameSettings | null>>;
};

export const GameMode = ({
    difficulty,
    includes,
    type,
    setGame,
}: GameModeProps) => {
    return (
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
                <Group spacing={'xs'}>
                    {includes.map(value => mapTileTypeToBadge(value))}
                </Group>
                <Difficulty value={difficulty} />
            </Stack>
            <Center>
                <Button
                    onClick={() =>
                        setGame({
                            type,
                            includes,
                            difficulty,
                        })
                    }
                >
                    {'Start game'}
                </Button>
            </Center>
        </SimpleGrid>
    );
};