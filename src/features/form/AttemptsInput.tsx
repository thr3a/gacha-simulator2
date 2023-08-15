import { NumberInput } from '@mantine/core';
import { useGachaFormContext } from '@/features/form/GachaContext';

export const AttemptsInput = (): JSX.Element => {
  const form = useGachaFormContext();
  return <NumberInput label="ガチャを試す回数" {...form.getInputProps('attempts')} />;
};
