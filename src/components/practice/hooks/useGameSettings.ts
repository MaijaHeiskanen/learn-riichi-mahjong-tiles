import { useLocalStorage } from '@mantine/hooks';
import { Dispatch, SetStateAction } from 'react';
import { Suit } from '../../tiles/tileTypes';

export type GameSettings = {
    suits: Record<Suit, boolean>;
    rounds: number;
    answerOptions: number;
    rotateTiles: boolean;
    useTimer: boolean;
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
