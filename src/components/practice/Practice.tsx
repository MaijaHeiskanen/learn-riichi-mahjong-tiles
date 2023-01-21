import { Button, Center, Container } from '@mantine/core';
import { useState } from 'react';
import { Game } from './Game';
import { useGameSettings } from './hooks/useGameSettings';
import { Settings } from './Settings';

export const Practice = () => {
    const [settings, setSettings] = useGameSettings();
    const [gameStarted, setGameStarted] = useState(false);

    const startGame = () => {
        setGameStarted(true);
    };

    const endGame = () => {
        setGameStarted(false);
    };

    return (
        <Container size={'lg'}>
            {gameStarted ? (
                <Game />
            ) : (
                <>
                    <Settings settings={settings} setSettings={setSettings} />

                    <Center mt={80}>
                        <Button size="xl" onClick={startGame}>
                            Start game
                        </Button>
                    </Center>
                </>
            )}
        </Container>
    );
};
