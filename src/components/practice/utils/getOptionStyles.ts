import { MantineTheme } from '@mantine/core';
import { getColors } from './colors';

type OptionStyleSettings = {
    theme: MantineTheme;
    clickable: boolean;
    greenOutline: boolean;
    redOutline: boolean;
};

export const getOptionStyles = ({
    theme,
    clickable,
    greenOutline,
    redOutline,
}: OptionStyleSettings) => {
    const { blue, green, red } = getColors(theme);

    let color;

    if (greenOutline) {
        color = green;
    }
    if (redOutline) {
        color = red;
    }

    return clickable
        ? {
              borderRadius: '4px',
              ':focus': {
                  outline: `5px solid ${color ?? blue}`,
              },
              ':hover': {
                  cursor: 'pointer',
              },
              outline: `5px solid ${color ?? 'none'}`,
          }
        : {};
};
