import { MantineTheme } from '@mantine/core';

export const getColors = (theme: MantineTheme) => {
    const blue = theme.colors.blue[4];
    const green = theme.colors.green[4];
    const red = theme.colors.red[4];

    return {
        blue,
        green,
        red,
    };
};
