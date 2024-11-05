import { useGachaFormContext } from '@/features/form/GachaContext';
import { Box, Select } from '@mantine/core';

const attemptList = (): string[] => {
  const list = [];
  for (let i = 1; i <= 20; i++) {
    list.push((i * 10).toString());
  }
  return list;
};

export const AttemptsInput = (): JSX.Element => {
  const form = useGachaFormContext();

  const handleChange = (value: any): void => {
    if (value !== null) {
      form.setFieldValue('attempts', Number(value));
    }
  };

  return (
    <Box>
      <Select
        label='ガチャを試す回数'
        data={attemptList()}
        value={form.values.attempts.toString()}
        onChange={handleChange}
      />
    </Box>
  );
};
