import { Center, Container, Stack, Title, Text } from '@mantine/core';
import { useState } from 'react';
import { GameList } from './GameList';
import { SelectMatchingNameForTile } from './SelectMatchingNameForTile';
import { GAME_TYPES } from './utils/consts';
import { GameSettings } from './utils/games';

export const GameMenu = () => {
    const [game, setGame] = useState<GameSettings | null>(null);

    const getContent = () => {
        const gameType = game ? game.type : null;

        switch (gameType) {
            case null:
                return <GameList setGame={setGame} />;
            case GAME_TYPES.SELECT_SUIT_FOR_TILE:
                return <Text>Coming soon...</Text>;
            case GAME_TYPES.SELECT_NAME_FOR_TILE:
                return (
                    <SelectMatchingNameForTile
                        includes={game!.includes}
                        type={game!.type}
                    />
                );
            case GAME_TYPES.SELECT_TILE_FOR_NAME:
                return <Text>Coming soon...</Text>;
            case GAME_TYPES.WRITE_NAME_FOR_TILE:
                return <Text>Coming soon...</Text>;
        }
    };

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
            <Center>{getContent()}</Center>
        </Stack>
    );
};
