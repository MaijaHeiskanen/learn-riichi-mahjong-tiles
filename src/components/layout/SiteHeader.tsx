import {
    Text,
    Burger,
    Header,
    MediaQuery,
    useMantineTheme,
} from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';

type SiteHeaderProps = {
    opened: boolean;
    setOpened: Dispatch<SetStateAction<boolean>>;
};

export const SiteHeader = ({ opened, setOpened }: SiteHeaderProps) => {
    const theme = useMantineTheme();

    return (
        <Header height={{ base: 40, md: 40 }} p={{ base: 'md', md: 'md' }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened(opened => !opened)}
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
    );
};
