import { MantineProvider, AppShell, Center, Space } from '@mantine/core';
import { useState } from 'react';
import { GameMenu } from './games/GameMenu';
import { SiteFooter } from './layout/SiteFooter';
import { SiteHeader } from './layout/SiteHeader';
import { PAGES, SiteNavbar } from './layout/SiteNavbar';
import { Stats } from './stats/Stats';
import { TileList } from './tiles/TileList';

const App = () => {
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
                navbar={
                    <SiteNavbar opened={opened} page={page} setPage={setPage} />
                }
                footer={<SiteFooter />}
                header={<SiteHeader opened={opened} setOpened={setOpened} />}
            >
                <Center>
                    {page === PAGES.TILES && <TileList />}
                    {page === PAGES.TEST && <GameMenu />}
                    {page === PAGES.STATS && <Stats />}
                </Center>

                <Space h={'xl'} />
            </AppShell>
        </MantineProvider>
    );
};

export default App;
