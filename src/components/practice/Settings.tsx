import {
    SimpleGrid,
    Stack,
    Title,
    Text,
    Group,
    NumberInput,
    Checkbox,
    Button,
} from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import { Suit } from '../tiles/tileTypes';
import { DEFAULT_GAME_SETTINGS, GameSettings } from './hooks/useGameSettings';
import { SuitChip } from './SuitChip';

const SUITS: Suit[] = ['M', 'P', 'S', 'W', 'D'];

type SettingsProps = {
    settings: GameSettings;
    setSettings: Dispatch<SetStateAction<GameSettings>>;
};

export const Settings = ({ settings, setSettings }: SettingsProps) => {
    const suitCheckedChanged = (suit: Suit, newValue: boolean) => {
        const suitSettings = { ...settings.suits };

        suitSettings[suit] = newValue;

        setSettings({ ...settings, suits: suitSettings });
    };

    const roundsChanged = (newValue: number | undefined) => {
        setSettings({
            ...settings,
            rounds: newValue ?? DEFAULT_GAME_SETTINGS.rounds,
        });
    };

    const answerOptionsChanged = (newValue: number | undefined) => {
        setSettings({
            ...settings,
            answerOptions: newValue ?? DEFAULT_GAME_SETTINGS.answerOptions,
        });
    };

    const rotateTilesChanged = (newValue: boolean) => {
        setSettings({ ...settings, rotateTiles: newValue });
    };

    const timerChanged = (newValue: boolean) => {
        setSettings({ ...settings, useTimer: newValue });
    };

    return (
        <Stack>
            <Group align={'baseline'} position="apart">
                <Title mb={30} size={'h2'}>
                    Game Settings
                </Title>
                <Button
                    onClick={() => setSettings(DEFAULT_GAME_SETTINGS)}
                    variant="subtle"
                >
                    Reset settings
                </Button>
            </Group>
            <SimpleGrid
                cols={1}
                spacing={30}
                breakpoints={[{ cols: 1, maxWidth: 'md' }]}
            >
                <Stack>
                    <Text weight={600} size={'lg'}>
                        Suits
                    </Text>
                    <Group>
                        {SUITS.map(suit => (
                            <SuitChip
                                key={suit}
                                suit={suit}
                                checked={settings.suits[suit]}
                                checkedChanged={newValue =>
                                    suitCheckedChanged(suit, newValue)
                                }
                            />
                        ))}
                    </Group>
                </Stack>
                <Stack>
                    <Text weight={600} size={'lg'}>
                        Rotation
                    </Text>
                    <Checkbox
                        label={
                            <Text weight={500} size={'lg'}>
                                Rotate tiles randomly
                            </Text>
                        }
                        checked={settings.rotateTiles}
                        onChange={() =>
                            rotateTilesChanged(!settings.rotateTiles)
                        }
                    />
                </Stack>
                <Stack>
                    <Text weight={600} size={'lg'}>
                        Timer
                    </Text>
                    <Checkbox
                        label={
                            <Text weight={500} size={'lg'}>
                                Use timer
                            </Text>
                        }
                        checked={settings.useTimer}
                        onChange={() => timerChanged(!settings.useTimer)}
                    />
                </Stack>
                <Stack>
                    <NumberInput
                        label={
                            <Text
                                style={{ marginBottom: 15 }}
                                weight={600}
                                size={'lg'}
                            >
                                Rounds
                            </Text>
                        }
                        stepHoldDelay={500}
                        stepHoldInterval={100}
                        min={1}
                        max={10000}
                        onChange={roundsChanged}
                        value={settings.rounds}
                    />
                </Stack>
                <Stack>
                    <NumberInput
                        label={
                            <Text
                                style={{ marginBottom: 15 }}
                                weight={600}
                                size={'lg'}
                            >
                                Answer options
                            </Text>
                        }
                        stepHoldDelay={500}
                        stepHoldInterval={100}
                        min={2}
                        max={9}
                        onChange={answerOptionsChanged}
                        value={settings.answerOptions}
                    />
                </Stack>
            </SimpleGrid>
        </Stack>
    );
};
