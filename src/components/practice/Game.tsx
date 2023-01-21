import { GameSettings } from './hooks/useGameSettings';

type GameProps = {
    settings: GameSettings;
    endGame: () => void;
};

export const Game = ({ settings, endGame }: GameProps) => {
    return <div>Game</div>;
};
