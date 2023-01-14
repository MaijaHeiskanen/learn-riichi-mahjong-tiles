import { Text, Navbar, NavLink } from '@mantine/core';
import {
    IconCards,
    IconChevronRight,
    IconGraph,
    IconPencil,
} from '@tabler/icons';
import { Dispatch, SetStateAction } from 'react';

export const enum PAGES {
    TILES,
    TEST,
    STATS,
}

type SiteNavbarProps = {
    opened: boolean;
    page: PAGES;
    setPage: Dispatch<SetStateAction<PAGES>>;
};

const NAV_ITEMS = [
    { label: 'Tiles', icon: <IconCards />, linkedPage: PAGES.TILES },
    { label: 'Practice', icon: <IconPencil />, linkedPage: PAGES.TEST },
    { label: 'Statistics', icon: <IconGraph />, linkedPage: PAGES.STATS },
];

export const SiteNavbar = ({ opened, page, setPage }: SiteNavbarProps) => {
    return (
        <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ base: 200, lg: 250 }}
        >
            {NAV_ITEMS.map(({ label, icon, linkedPage }) => (
                <NavLink
                    key={linkedPage}
                    label={<Text>{label}</Text>}
                    icon={icon}
                    rightSection={<IconChevronRight size={12} stroke={1.5} />}
                    active={page === linkedPage}
                    onClick={() => {
                        setPage(linkedPage);
                    }}
                />
            ))}
        </Navbar>
    );
};
