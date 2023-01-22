import {
    Button,
    Card,
    Center,
    Container,
    Group,
    Stack,
    Text,
} from '@mantine/core';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getRandomIntFromRange } from '../../utils/getRandomIntFromRange';
import { shuffle } from '../../utils/shuffle';
import { Tile } from '../tiles/Tile';
import {
    DRAGON_TILE_CODES,
    MAN_TILE_CODES,
    PIN_TILE_CODES,
    SOU_TILE_CODES,
    TileCode,
    WIND_TILE_CODES,
} from '../tiles/tileCodes';
import { getTileName } from '../tiles/tiles';
import { GameSettings, Suit } from './hooks/useGameSettings';

const ROUND_TIMEOUT = 1000;

type GameProps = {
    settings: GameSettings;
    endGame: () => void;
};

const getSuitTileCodes = (suit: Suit) => {
    switch (suit) {
        case 'M':
            return [...MAN_TILE_CODES];
        case 'P':
            return [...PIN_TILE_CODES];
        case 'S':
            return [...SOU_TILE_CODES];
        case 'W':
            return [...WIND_TILE_CODES];
        case 'D':
            return [...DRAGON_TILE_CODES];
    }
};

const getRandomSuit = (suits: Suit[]) => {
    return suits[getRandomIntFromRange(0, suits.length)];
};

const getSuitsInUse = (suits: GameSettings['suits']) => {
    const suitsInUse: Suit[] = [];

    for (const key in suits) {
        const suitCode = key as keyof typeof suits;

        if (suits[suitCode]) {
            suitsInUse.push(suitCode);
        }
    }

    return suitsInUse;
};

const splicaRandomTileCode = (tileCodes: TileCode[]) => {
    return tileCodes.splice(getRandomIntFromRange(0, tileCodes.length), 1)[0];
};

const getRoundTileCodes = (
    suits: GameSettings['suits'],
    answerOptions: GameSettings['answerOptions']
): [TileCode, TileCode[]] => {
    const suitsInUse = getSuitsInUse(suits);
    const randomSuit = getRandomSuit(suitsInUse);
    const tileCodes = getSuitTileCodes(randomSuit);
    const answer = splicaRandomTileCode(tileCodes);

    const options: TileCode[] = [answer];

    for (let i = 1; i < answerOptions; i++) {
        options.push(splicaRandomTileCode(tileCodes));
    }

    return [answer, shuffle(options)];
};

const setAnswerAndOptions = (
    settings: GameSettings,
    setAnswer: Dispatch<SetStateAction<TileCode | null>>,
    setOptions: Dispatch<SetStateAction<TileCode[]>>
) => {
    const [firstAnswer, firstOptions] = getRoundTileCodes(
        settings.suits,
        settings.answerOptions
    );

    setAnswer(firstAnswer);
    setOptions(firstOptions);
};

export const Game = ({ settings, endGame }: GameProps) => {
    const [round, setRound] = useState(1);
    const [points, setPoints] = useState(0);
    const [selected, setSelected] = useState<TileCode | null>(null);
    const [answer, setAnswer] = useState<TileCode | null>(null);
    const [options, setOptions] = useState<TileCode[]>([]);
    const [gameEnded, setGameEnded] = useState(false);

    useEffect(() => {
        setAnswerAndOptions(settings, setAnswer, setOptions);
    }, []);

    const selectTile = (tileCode: TileCode) => {
        setSelected(tileCode);

        if (tileCode === answer) {
            setPoints(p => p + 1);
        }

        if (round === settings.rounds) {
            setGameEnded(true);

            return;
        }

        setTimeout(() => {
            setRound(r => r + 1);
            setAnswerAndOptions(settings, setAnswer, setOptions);
            setSelected(null);
        }, ROUND_TIMEOUT);
    };

    const resetGame = () => {
        setSelected(null);
        setRound(1);
        setPoints(0);
        setAnswerAndOptions(settings, setAnswer, setOptions);
        setGameEnded(false);
    };

    return (
        <Container size={'xl'}>
            <Stack>
                <Card withBorder>
                    <Text>
                        Round {round}/{settings.rounds}
                    </Text>
                </Card>
                <Center>{answer && <Text>{getTileName(answer)}</Text>}</Center>
                <Group position="center">
                    {options.map(option => (
                        <Tile
                            disabled={Boolean(selected)}
                            key={`${round}-${option}`}
                            code={option}
                            rotateRandomly={settings.rotateTiles}
                            onClick={selectTile}
                            greenOutline={Boolean(
                                selected && option === answer
                            )}
                            redOutline={Boolean(
                                selected &&
                                    selected !== answer &&
                                    option !== answer
                            )}
                        />
                    ))}
                </Group>
                {gameEnded && (
                    <Stack>
                        <Text size={'xl'}>
                            You got {points} out of {settings.rounds} points!
                        </Text>
                        <Button onClick={resetGame}>Play again</Button>
                        <Button onClick={endGame}>Back to menu</Button>
                    </Stack>
                )}
            </Stack>
        </Container>
    );
};
