import { Button, Card, Center, Container } from '@mantine/core';
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
            <Card p={'xl'}>
                {gameStarted ? (
                    <Game settings={settings} endGame={endGame} />
                ) : (
                    <>
                        <Settings
                            settings={settings}
                            setSettings={setSettings}
                        />

                        <Center mt={80}>
                            <Button size="xl" onClick={startGame}>
                                Start game
                            </Button>
                        </Center>
                    </>
                )}
            </Card>
        </Container>
    );
};
