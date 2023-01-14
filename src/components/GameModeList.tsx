import { Divider, Stack } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import { GameMode } from './games/GameMode';
import { Game, GameSettings } from './games/utils/games';

type GameModeListProps = {
    modes: Game['modes'];
    type: Game['type'];
    setGame: Dispatch<SetStateAction<GameSettings | null>>;
};

export const GameModeList = ({ modes, type, setGame }: GameModeListProps) => {
    return (
        <Stack>
            {modes.map(({ difficulty, includes }) => {
                return (
                    <>
                        <Divider />
                        <GameMode
                            type={type}
                            difficulty={difficulty}
                            includes={includes}
                            setGame={setGame}
                        />
                    </>
                );
            })}
        </Stack>
    );
};
