import { Rating } from '@mantine/core';

type DifficultyProps = {
    value: number;
};

export const Difficulty = ({ value }: DifficultyProps) => {
    return <Rating defaultValue={value} readOnly />;
};
