import {
    MantineProvider,
    Text,
    AppShell,
    Center,
    Group,
    Stack,
} from '@mantine/core';
import { Tile } from './tiles/Tile';

const App = () => {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: 'dark',
            }}
        >
            <AppShell>
                <Center>
                    <Stack>
                        <Group>
                            <Tile code={'M1'} showName />
                            <Tile code={'M2'} showName />
                            <Tile code={'M3'} showName />
                            <Tile code={'M4'} showName />
                            <Tile code={'M5'} showName />
                            <Tile code={'M5d'} showName />
                            <Tile code={'M6'} showName />
                            <Tile code={'M7'} showName />
                            <Tile code={'M8'} showName />
                            <Tile code={'M9'} showName />
                        </Group>

                        <Group>
                            <Tile code={'P1'} showName />
                            <Tile code={'P2'} showName />
                            <Tile code={'P3'} showName />
                            <Tile code={'P4'} showName />
                            <Tile code={'P5'} showName />
                            <Tile code={'P5d'} showName />
                            <Tile code={'P6'} showName />
                            <Tile code={'P7'} showName />
                            <Tile code={'P8'} showName />
                            <Tile code={'P9'} showName />
                        </Group>

                        <Group>
                            <Tile code={'S1'} showName />
                            <Tile code={'S2'} showName />
                            <Tile code={'S3'} showName />
                            <Tile code={'S4'} showName />
                            <Tile code={'S5'} showName />
                            <Tile code={'S5d'} showName />
                            <Tile code={'S6'} showName />
                            <Tile code={'S7'} showName />
                            <Tile code={'S8'} showName />
                            <Tile code={'S9'} showName />
                        </Group>

                        <Group>
                            <Tile code={'WE'} showName />
                            <Tile code={'WS'} showName />
                            <Tile code={'WN'} showName />
                            <Tile code={'WW'} showName />
                        </Group>

                        <Group>
                            <Tile code={'DR'} showName />
                            <Tile code={'DW'} showName />
                            <Tile code={'DG'} showName />
                        </Group>
                    </Stack>
                </Center>
            </AppShell>
        </MantineProvider>
    );
};

export default App;
