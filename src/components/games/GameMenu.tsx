import { Center, Container, Stack, Title, Text } from '@mantine/core';
import { useState } from 'react';
import { GameList } from './GameList';
import { GameSettings } from './utils/games';

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
                <GameList setGame={setGame} />
            </Center>
        </Stack>
    );
};
