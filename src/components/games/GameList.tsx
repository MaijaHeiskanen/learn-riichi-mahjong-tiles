import { Card, Container, SimpleGrid, Stack, Title, Text } from '@mantine/core';
import { GAMES, GameSettings } from './utils/games';
import { mapGameTypeToNameAndDescription } from './utils/mapGameTypeToNameAndDescription';
import { Dispatch, SetStateAction } from 'react';
import { GameModeList } from '../GameModeList';

type GameListProps = {
    setGame: Dispatch<SetStateAction<GameSettings | null>>;
};

export const GameList = ({ setGame }: GameListProps) => {
    return (
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {GAMES.map(({ type, modes }) => {
                const { name, description } =
                    mapGameTypeToNameAndDescription(type);

                return (
                    <Container size={400} ml={0} mr={0} pl={0} pr={0}>
                        <Card>
                            <Stack>
                                <Title size={'h3'}>{name}</Title>
                                <Text>{description}</Text>
                                <GameModeList
                                    modes={modes}
                                    type={type}
                                    setGame={setGame}
                                />
                            </Stack>
                        </Card>
                    </Container>
                );
            })}
        </SimpleGrid>
    );
};
