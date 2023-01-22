import { ReactComponent as Man1 } from './../../svgs/white_tiles/Man1.svg';
import { ReactComponent as Man2 } from './../../svgs/white_tiles/Man2.svg';
import { ReactComponent as Man3 } from './../../svgs/white_tiles/Man3.svg';
import { ReactComponent as Man4 } from './../../svgs/white_tiles/Man4.svg';
import { ReactComponent as Man5 } from './../../svgs/white_tiles/Man5.svg';
import { ReactComponent as Man5Dora } from './../../svgs/white_tiles/Man5-Dora.svg';
import { ReactComponent as Man6 } from './../../svgs/white_tiles/Man6.svg';
import { ReactComponent as Man7 } from './../../svgs/white_tiles/Man7.svg';
import { ReactComponent as Man8 } from './../../svgs/white_tiles/Man8.svg';
import { ReactComponent as Man9 } from './../../svgs/white_tiles/Man9.svg';

import { ReactComponent as Pin1 } from './../../svgs/white_tiles/Pin1.svg';
import { ReactComponent as Pin2 } from './../../svgs/white_tiles/Pin2.svg';
import { ReactComponent as Pin3 } from './../../svgs/white_tiles/Pin3.svg';
import { ReactComponent as Pin4 } from './../../svgs/white_tiles/Pin4.svg';
import { ReactComponent as Pin5 } from './../../svgs/white_tiles/Pin5.svg';
import { ReactComponent as Pin5Dora } from './../../svgs/white_tiles/Pin5-Dora.svg';
import { ReactComponent as Pin6 } from './../../svgs/white_tiles/Pin6.svg';
import { ReactComponent as Pin7 } from './../../svgs/white_tiles/Pin7.svg';
import { ReactComponent as Pin8 } from './../../svgs/white_tiles/Pin8.svg';
import { ReactComponent as Pin9 } from './../../svgs/white_tiles/Pin9.svg';

import { ReactComponent as Sou1 } from './../../svgs/white_tiles/Sou1.svg';
import { ReactComponent as Sou2 } from './../../svgs/white_tiles/Sou2.svg';
import { ReactComponent as Sou3 } from './../../svgs/white_tiles/Sou3.svg';
import { ReactComponent as Sou4 } from './../../svgs/white_tiles/Sou4.svg';
import { ReactComponent as Sou5 } from './../../svgs/white_tiles/Sou5.svg';
import { ReactComponent as Sou5Dora } from './../../svgs/white_tiles/Sou5-Dora.svg';
import { ReactComponent as Sou6 } from './../../svgs/white_tiles/Sou6.svg';
import { ReactComponent as Sou7 } from './../../svgs/white_tiles/Sou7.svg';
import { ReactComponent as Sou8 } from './../../svgs/white_tiles/Sou8.svg';
import { ReactComponent as Sou9 } from './../../svgs/white_tiles/Sou9.svg';

import { ReactComponent as Ton } from './../../svgs/white_tiles/Ton.svg';
import { ReactComponent as Nan } from './../../svgs/white_tiles/Nan.svg';
import { ReactComponent as Shaa } from './../../svgs/white_tiles/Shaa.svg';
import { ReactComponent as Pei } from './../../svgs/white_tiles/Pei.svg';

import { ReactComponent as Chun } from './../../svgs/white_tiles/Chun.svg';
import { ReactComponent as Haku } from './../../svgs/white_tiles/Haku.svg';
import { ReactComponent as Hatsu } from './../../svgs/white_tiles/Hatsu.svg';

import { ReactComponent as Blank } from './../../svgs/white_tiles/Blank.svg';
import { TileCode } from './tileCodes';

const TILE_COMPONENTS: Record<
    TileCode | 'Blank',
    {
        component: React.FunctionComponent<
            React.SVGProps<SVGSVGElement> & {
                title?: string | undefined;
            }
        >;
        name: string;
    }
> = {
    M1: { component: Man1, name: 'Man 1' },
    M2: { component: Man2, name: 'Man 2' },
    M3: { component: Man3, name: 'Man 3' },
    M4: { component: Man4, name: 'Man 4' },
    M5: { component: Man5, name: 'Man 5' },
    M5d: { component: Man5Dora, name: 'Man 5 dora' },
    M6: { component: Man6, name: 'Man 6' },
    M7: { component: Man7, name: 'Man 7' },
    M8: { component: Man8, name: 'Man 8' },
    M9: { component: Man9, name: 'Man 9' },
    P1: { component: Pin1, name: 'Pin 1' },
    P2: { component: Pin2, name: 'Pin 2' },
    P3: { component: Pin3, name: 'Pin 3' },
    P4: { component: Pin4, name: 'Pin 4' },
    P5: { component: Pin5, name: 'Pin 5' },
    P5d: { component: Pin5Dora, name: 'Pin 5 dora' },
    P6: { component: Pin6, name: 'Pin 6' },
    P7: { component: Pin7, name: 'Pin 7' },
    P8: { component: Pin8, name: 'Pin 8' },
    P9: { component: Pin9, name: 'Pin 9' },
    S1: { component: Sou1, name: 'Sou 1' },
    S2: { component: Sou2, name: 'Sou 2' },
    S3: { component: Sou3, name: 'Sou 3' },
    S4: { component: Sou4, name: 'Sou 4' },
    S5: { component: Sou5, name: 'Sou 5' },
    S5d: { component: Sou5Dora, name: 'Sou 5 dora' },
    S6: { component: Sou6, name: 'Sou 6' },
    S7: { component: Sou7, name: 'Sou 7' },
    S8: { component: Sou8, name: 'Sou 8' },
    S9: { component: Sou9, name: 'Sou 9' },
    WE: { component: Ton, name: 'East' },
    WS: { component: Nan, name: 'South' },
    WW: { component: Shaa, name: 'West' },
    WN: { component: Pei, name: 'North' },
    DR: { component: Chun, name: 'Red Dragon' },
    DW: { component: Haku, name: 'White Dragon' },
    DG: { component: Hatsu, name: 'Green Dragon' },
    Blank: { component: Blank, name: 'Unkown tile' },
};

export const getTileComponent = (code: string, rotation?: number) => {
    const tileObj = TILE_COMPONENTS[code as TileCode];
    const Component = tileObj?.component ?? TILE_COMPONENTS['Blank'].component;

    return (
        <Component
            style={{
                rotate: `${Number(rotation ?? 0)}deg`,
                scale: `${Number((rotation ?? 0) % 180 !== 0 ? 0.7 : 1)}`,
            }}
        />
    );
};

export const getTileName = (code: string) => {
    const component = TILE_COMPONENTS[code as TileCode];

    return component?.name ?? TILE_COMPONENTS['Blank'].name;
};
