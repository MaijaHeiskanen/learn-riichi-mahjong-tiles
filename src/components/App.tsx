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
                            <Tile code={'M1'} />
                            <Tile code={'M2'} />
                            <Tile code={'M3'} />
                            <Tile code={'M4'} />
                            <Tile code={'M5'} />
                            <Tile code={'M6'} />
                            <Tile code={'M7'} />
                            <Tile code={'M8'} />
                            <Tile code={'M9'} />
                        </Group>

                        <Group>
                            <Tile code={'P1'} />
                            <Tile code={'P2'} />
                            <Tile code={'P3'} />
                            <Tile code={'P4'} />
                            <Tile code={'P5'} />
                            <Tile code={'P6'} />
                            <Tile code={'P7'} />
                            <Tile code={'P8'} />
                            <Tile code={'P9'} />
                        </Group>

                        <Group>
                            <Tile code={'S1'} />
                            <Tile code={'S2'} />
                            <Tile code={'S3'} />
                            <Tile code={'S4'} />
                            <Tile code={'S5'} />
                            <Tile code={'S6'} />
                            <Tile code={'S7'} />
                            <Tile code={'S8'} />
                            <Tile code={'S9'} />
                        </Group>
                    </Stack>
                </Center>
            </AppShell>
        </MantineProvider>
    );
};

export default App;
