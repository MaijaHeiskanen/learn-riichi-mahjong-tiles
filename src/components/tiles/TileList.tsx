import { Card, Group, Stack, Title } from '@mantine/core';
import { Tile } from './Tile';
import {
    DRAGON_TILE_CODES,
    MAN_TILE_CODES,
    PIN_TILE_CODES,
    SOU_TILE_CODES,
    WIND_TILE_CODES,
} from './tileCodes';

const TILE_GROUPS = [
    { title: 'Man', tileCodes: MAN_TILE_CODES },
    { title: 'Pin', tileCodes: PIN_TILE_CODES },
    { title: 'Sou', tileCodes: SOU_TILE_CODES },
    { title: 'Winds', tileCodes: WIND_TILE_CODES },
    { title: 'Dragons', tileCodes: DRAGON_TILE_CODES },
];

export const TileList = () => {
    return (
        <Card p={'xl'}>
            <Stack>
                <Title size={'h2'}>Riichi Tiles</Title>

                {TILE_GROUPS.map(({ title, tileCodes }) => (
                    <Stack key={title}>
                        <Title size={'h3'}>{title}</Title>
                        <Group>
                            {tileCodes.map(code => (
                                <Tile key={code} code={code} showName />
                            ))}
                        </Group>
                    </Stack>
                ))}
            </Stack>
        </Card>
    );
};
