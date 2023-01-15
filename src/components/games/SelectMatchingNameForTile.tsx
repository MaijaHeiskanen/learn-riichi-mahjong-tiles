import {
    Center,
    Container,
    Flex,
    Group,
    Rating,
    Stack,
    Text,
} from '@mantine/core';
import { useState } from 'react';
import { Tile } from '../tiles/Tile';
import { TILE } from '../tiles/tileTypes';
import { mapStringToName } from '../tiles/utils/mapStringToName';
import { GameSettings } from './utils/games';
import { mapTileTypeToBadge } from './utils/mapTileTypeToBadge';

type SelectMatchingNameForTileProps = GameSettings;

const ROUNDS = 10;
const options: TILE[] = ['M3', 'M8', 'M6'];
const unknown: TILE = 'M6';

export const SelectMatchingNameForTile = ({
    includes,
    type,
    difficulty,
}: SelectMatchingNameForTileProps) => {
    const [round, setRound] = useState(1);

    return (
        <Container>
            <Stack>
                <Text>
                    Round {round}/{ROUNDS}
                </Text>
                <Group>{includes.map(type => mapTileTypeToBadge(type))}</Group>
                <Rating defaultValue={difficulty} readOnly />
                <Center>
                    <Text>{mapStringToName(unknown)}</Text>
                </Center>
                <Flex gap={'xl'} justify={'center'}>
                    {options.map(option => (
                        <Tile
                            onClick={() => console.log('clicked', option)}
                            code={option}
                        />
                    ))}
                </Flex>
            </Stack>
        </Container>
    );
};
