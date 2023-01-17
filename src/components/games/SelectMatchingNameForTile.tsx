import {
    Button,
    Center,
    Container,
    Flex,
    Group,
    Rating,
    Stack,
    Text,
} from '@mantine/core';
import { createRef, useRef, useState } from 'react';
import { Tile } from '../tiles/Tile';
import {
    MAN_TILE_CODES,
    PIN_TILE_CODES,
    SOU_TILE_CODES,
    WIND_TILE_CODES,
    DRAGON_TILE_CODES,
} from '../tiles/tiles';
import {
    TILE,
    TILE_DRAGON,
    TILE_NUMBERS_1_TO_9,
    TILE_WIND,
} from '../tiles/tileTypes';
import { mapStringToName } from '../tiles/utils/mapStringToName';
import { Difficulty } from './Difficulty';
import { INCLUDED_TILES } from './utils/consts';
import { GameSettings } from './utils/games';
import { mapTileTypeToBadge } from './utils/mapTileTypeToBadge';

type SelectMatchingNameForTileProps = GameSettings;

const ROUNDS = 10;
const TO_NEXT_ROUND_TIMEOUT = 2000;

type Includes = GameSettings['includes'];

const MAN_TILE_CODES_NO_DORA = MAN_TILE_CODES.filter(code => code.length === 2);
const PIN_TILE_CODES_NO_DORA = PIN_TILE_CODES.filter(code => code.length === 2);
const SOU_TILE_CODES_NO_DORA = SOU_TILE_CODES.filter(code => code.length === 2);

const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

const getRandomSuit = (includes: Includes) => {
    return includes[getRandomInt(0, includes.length)];
};

const getRandomTileOfASuit = (suit: INCLUDED_TILES) => {
    switch (suit) {
        case INCLUDED_TILES.MAN:
            return `M${getRandomInt(0, 10).toString() as TILE_NUMBERS_1_TO_9}`;
        case INCLUDED_TILES.PIN:
            return `P${getRandomInt(0, 10).toString() as TILE_NUMBERS_1_TO_9}`;
        case INCLUDED_TILES.SOU:
            return `S${getRandomInt(0, 10).toString() as TILE_NUMBERS_1_TO_9}`;
        case INCLUDED_TILES.WINDS:
            const windLetters: TILE_WIND[] = ['E', 'S', 'W', 'N'];
            const randomWindLetter =
                windLetters[getRandomInt(0, windLetters.length)];

            return `W${randomWindLetter}`;
        case INCLUDED_TILES.DRAGONS:
            const dragonLetters: TILE_DRAGON[] = ['R', 'W', 'G'];
            const randomDragonLetter =
                dragonLetters[getRandomInt(0, dragonLetters.length)];

            return `D${randomDragonLetter}`;
    }
};

const getTileCodesOfSuit = (suit: INCLUDED_TILES) => {
    switch (suit) {
        case INCLUDED_TILES.MAN:
            return [...MAN_TILE_CODES_NO_DORA];
        case INCLUDED_TILES.PIN:
            return [...PIN_TILE_CODES_NO_DORA];
        case INCLUDED_TILES.SOU:
            return [...SOU_TILE_CODES_NO_DORA];
        case INCLUDED_TILES.WINDS:
            return [...WIND_TILE_CODES];
        case INCLUDED_TILES.DRAGONS:
            return [...DRAGON_TILE_CODES];
    }
};

const spliceRandomTile = <T,>(tiles: T[]): T => {
    return tiles.splice(getRandomInt(0, tiles.length), 1)[0];
};

const shuffleArray = <T extends unknown[]>(array: T): T => {
    return array.sort(() => 0.5 - Math.random());
};

const getRandomTileAndOptions = (includes: Includes): [TILE, TILE[]] => {
    const randomSuit = getRandomSuit(includes);
    const tileCodesOfSuit: TILE[] = getTileCodesOfSuit(randomSuit);

    const answer = spliceRandomTile(tileCodesOfSuit);
    const options = [
        answer,
        spliceRandomTile(tileCodesOfSuit),
        spliceRandomTile(tileCodesOfSuit),
    ];

    return [answer, shuffleArray(options)];
};

export const SelectMatchingNameForTile = ({
    includes,
    type,
    difficulty,
}: SelectMatchingNameForTileProps) => {
    const ref = createRef<HTMLDivElement>();
    const [initialAnswer, initialOptions] = getRandomTileAndOptions(includes);

    const [gameEnded, setGameEnded] = useState(false);
    const [round, setRound] = useState(1);
    const [points, setPoints] = useState(0);
    const [selected, setSelected] = useState<TILE | null>(null);
    const [answer, setAnswer] = useState<TILE>(initialAnswer);
    const [options, setOptions] = useState<TILE[]>(initialOptions);

    const selectTile = (code: TILE) => {
        if (selected) {
            return;
        }

        setSelected(code);

        if (code === answer) {
            setPoints(p => p + 1);
        }

        setTimeout(() => {
            if (round === ROUNDS) {
                setGameEnded(true);

                return;
            }

            ref.current?.focus();
            setRound(r => r + 1);
            setSelected(null);

            const [newAnswer, newOptions] = getRandomTileAndOptions(includes);

            setAnswer(newAnswer);
            setOptions(newOptions);
        }, TO_NEXT_ROUND_TIMEOUT);
    };

    const resetGame = () => {
        const [newAnswer, newOptions] = getRandomTileAndOptions(includes);

        setAnswer(newAnswer);
        setOptions(newOptions);
        setGameEnded(false);
        setRound(1);
        setSelected(null);
        setPoints(0);
    };

    return (
        <Container>
            <Stack>
                <Text>
                    Round {round}/{ROUNDS}
                </Text>
                <Group>{includes.map(type => mapTileTypeToBadge(type))}</Group>
                <Difficulty value={difficulty} />
                <Center ref={ref}>
                    <Text>{mapStringToName(answer)}</Text>
                </Center>
                <Flex gap={'xl'} justify={'center'}>
                    {options.map(option => (
                        <Tile
                            key={`${round}+${option}`}
                            onClick={selectTile}
                            code={option}
                            greenOutline={Boolean(
                                selected && option === answer
                            )}
                            redOutline={Boolean(
                                selected &&
                                    selected !== answer &&
                                    selected === option
                            )}
                        />
                    ))}
                </Flex>
                {gameEnded && (
                    <>
                        <Text>
                            You got {points} out of {ROUNDS} points
                        </Text>
                        <Button onClick={resetGame}>Play again</Button>
                    </>
                )}
            </Stack>
        </Container>
    );
};
