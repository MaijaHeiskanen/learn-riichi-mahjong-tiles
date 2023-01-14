import {
    MantineProvider,
    AppShell,
    Center,
    Navbar,
    useMantineTheme,
    Text,
    MediaQuery,
    Aside,
    Footer,
    Header,
    Burger,
} from '@mantine/core';
import { useState } from 'react';
import { TileList } from './TileList';

const App = () => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: 'dark',
            }}
        >
            <AppShell
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                navbar={
                    <Navbar
                        p="md"
                        hiddenBreakpoint="sm"
                        hidden={!opened}
                        width={{ sm: 200, lg: 300 }}
                    >
                        <Text>Application navbar</Text>
                    </Navbar>
                }
                footer={
                    <Footer
                        height={{ base: 40, md: 50 }}
                        p={{ base: 'xs', md: 'md' }}
                    >
                        Application footer
                    </Footer>
                }
                header={
                    <Header
                        height={{ base: 30, md: 40 }}
                        p={{ base: 'md', md: 'md' }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '100%',
                            }}
                        >
                            <MediaQuery
                                largerThan="sm"
                                styles={{ display: 'none' }}
                            >
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened(o => !o)}
                                    size="sm"
                                    color={theme.colors.gray[6]}
                                    mr="xl"
                                />
                            </MediaQuery>

                            <Text weight={600} size={'lg'}>
                                Learn Riichi Tiles
                            </Text>
                        </div>
                    </Header>
                }
            >
                <Center>
                    <TileList />
                </Center>
            </AppShell>
        </MantineProvider>
    );
};

export default App;
