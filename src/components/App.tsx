import { MantineProvider, Text, AppShell, Center } from '@mantine/core';
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
                    <Text>Learn Riichi Tiles</Text>
                    <Tile code={'WW'} />
                </Center>
            </AppShell>
        </MantineProvider>
    );
};

export default App;
