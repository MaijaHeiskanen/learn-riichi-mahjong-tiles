import {
    MantineProvider,
    AppShell,
    Center,
    Navbar,
    useMantineTheme,
    Text,
    MediaQuery,
    Footer,
    Header,
    Burger,
    Anchor,
    NavLink,
    Group,
} from '@mantine/core';
import {
    IconChevronRight,
    IconCards,
    IconPencil,
    IconGraph,
} from '@tabler/icons';
import { useState } from 'react';
import { TileList } from './TileList';

const enum PAGES {
    TILES,
    TEST,
    STATS,
}

const App = () => {
    const theme = useMantineTheme();
    const [page, setPage] = useState<PAGES>(PAGES.TILES);
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
                        width={{ base: 200, lg: 250 }}
                    >
                        <NavLink
                            label={<Text>Tiles</Text>}
                            icon={<IconCards />}
                            rightSection={
                                <IconChevronRight size={12} stroke={1.5} />
                            }
                            variant="subtle"
                            active={page === PAGES.TILES}
                            onClick={() => {
                                setPage(PAGES.TILES);
                            }}
                        />
                        <NavLink
                            label={<Text>Practise</Text>}
                            icon={<IconPencil />}
                            rightSection={
                                <IconChevronRight size={12} stroke={1.5} />
                            }
                            variant="subtle"
                            active={page === PAGES.TEST}
                            onClick={() => {
                                setPage(PAGES.TEST);
                            }}
                        />
                        <NavLink
                            label={<Text>Statistics</Text>}
                            icon={<IconGraph />}
                            rightSection={
                                <IconChevronRight size={12} stroke={1.5} />
                            }
                            variant="subtle"
                            active={page === PAGES.STATS}
                            onClick={() => {
                                setPage(PAGES.STATS);
                            }}
                        />
                    </Navbar>
                }
                footer={
                    <Footer
                        height={{ base: 30, md: 40 }}
                        p={{ base: 4, md: 'sm' }}
                    >
                        <Center>
                            <Group>
                                <Text>
                                    Page ©{' '}
                                    <Anchor
                                        href="https://github.com/MaijaHeiskanen"
                                        target="https://github.com/MaijaHeiskanen"
                                    >
                                        MaijaHeiskanen
                                    </Anchor>
                                </Text>
                                <Text>|</Text>
                                <Text>
                                    Tiles ©{' '}
                                    <Anchor
                                        href="https://github.com/FluffyStuff/riichi-mahjong-tiles/blob/master/LICENSE.md"
                                        target="https://github.com/FluffyStuff/riichi-mahjong-tiles/blob/master/LICENSE.md"
                                    >
                                        FluffyStuff
                                    </Anchor>
                                </Text>
                            </Group>
                        </Center>
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
                {page === PAGES.TILES && (
                    <Center>
                        <TileList />
                    </Center>
                )}
                {page === PAGES.TEST && <Center>Test</Center>}
                {page === PAGES.STATS && <Center>Stats</Center>}
            </AppShell>
        </MantineProvider>
    );
};

export default App;
