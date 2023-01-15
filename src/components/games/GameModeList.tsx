import { Divider, Stack } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import { GameMode } from './GameMode';
import { Game, GameSettings } from './utils/games';

type GameModeListProps = {
    modes: Game['modes'];
    type: Game['type'];
    setGame: Dispatch<SetStateAction<GameSettings | null>>;
};

export const GameModeList = ({ modes, type, setGame }: GameModeListProps) => {
    return (
        <>
            {modes.map(({ difficulty, includes }) => {
                return (
                    <Stack key={`${type}+${difficulty}+${includes.toString()}`}>
                        <Divider />
                        <GameMode
                            type={type}
                            difficulty={difficulty}
                            includes={includes}
                            setGame={setGame}
                        />
                    </Stack>
                );
            })}
        </>
    );
};
