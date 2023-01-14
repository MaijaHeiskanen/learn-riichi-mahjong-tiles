import { MantineProvider, AppShell, Center } from '@mantine/core';
import { useState } from 'react';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
import { PAGES, SiteNavbar } from './SiteNavbar';
import { TileList } from './TileList';

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
                asideOffsetBreakpoint="sm"
                navbar={
                    <SiteNavbar opened={opened} page={page} setPage={setPage} />
                }
                footer={<SiteFooter />}
                header={<SiteHeader opened={opened} setOpened={setOpened} />}
            >
                <Center>
                    {page === PAGES.TILES && <TileList />}
                    {page === PAGES.TEST && 'Test'}
                    {page === PAGES.STATS && 'Stats'}
                </Center>
            </AppShell>
        </MantineProvider>
    );
};

export default App;
