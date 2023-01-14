import { MantineProvider, Text, AppShell, Center } from '@mantine/core';
import { Tile } from './tiles/Tile';

const App = () => {
    return (
        <>
            <Tile />
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
                        <Tile />
                    </Center>
                </AppShell>
            </MantineProvider>
        </>
    );
};

export default App;
