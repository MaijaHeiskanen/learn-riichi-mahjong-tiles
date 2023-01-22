import { Card, Container, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import { GameSettings } from './hooks/useGameSettings';

type GameProps = {
    settings: GameSettings;
    endGame: () => void;
};

export const Game = ({ settings, endGame }: GameProps) => {
    const [round, setRound] = useState(1);

    return (
        <Container size={'xl'}>
            <Stack>
                <Card withBorder>
                    <Text>
                        Round {round}/{settings.rounds}
                    </Text>
                </Card>
            </Stack>
        </Container>
    );
};
