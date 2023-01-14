import { Text, Footer, Center, Group, Anchor } from '@mantine/core';

const FOOTER_REFERENCES = [
    {
        text: 'Page © ',
        link: 'https://github.com/MaijaHeiskanen',
        linkText: 'MaijaHeiskanen',
    },
    {
        text: 'Tiles © ',
        link: 'https://github.com/FluffyStuff/riichi-mahjong-tiles/blob/master/LICENSE.md',
        linkText: 'FluffyStuff',
    },
];

export const SiteFooter = () => {
    return (
        <Footer height={{ base: 30, md: 40 }} p={{ base: 4, md: 'sm' }}>
            <Center>
                <Group>
                    {FOOTER_REFERENCES.map(({ text, link, linkText }) => (
                        <Text key={link}>
                            {text}
                            <Anchor href={link} target={link}>
                                {linkText}
                            </Anchor>
                        </Text>
                    ))}
                </Group>
            </Center>
        </Footer>
    );
};
