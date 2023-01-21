import { useLocalStorage } from '@mantine/hooks';
import { Dispatch, SetStateAction } from 'react';

export type Suit = 'M' | 'P' | 'S' | 'W' | 'D';

export const enum GameMode {
    NAME_TO_TILE = 'name_to_tile',
    TILE_TO_NAME = 'tile_to_name',
}

export type GameSettings = {
    suits: Record<Suit, boolean>;
    rounds: number;
    answerOptions: number;
    rotateTiles: boolean;
    useTimer: boolean;
    mode: GameMode;
};

export const DEFAULT_GAME_SETTINGS: GameSettings = {
    suits: {
        M: true,
        P: true,
        S: true,
        W: true,
        D: true,
    },
    rounds: 10,
    answerOptions: 3,
    rotateTiles: false,
    useTimer: false,
    mode: GameMode.NAME_TO_TILE,
};

export const useGameSettings = (): [
    GameSettings,
    Dispatch<SetStateAction<GameSettings>>
] => {
    const [settings, setSettings] = useLocalStorage<GameSettings>({
        key: 'GAME_SETTINGS',
        defaultValue: DEFAULT_GAME_SETTINGS,
    });

    return [settings, setSettings];
};
