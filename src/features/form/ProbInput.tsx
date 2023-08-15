import { NumberInput } from '@mantine/core';
import { useGachaFormContext } from '@/features/form/GachaContext';

export const ProbInput = (): JSX.Element => {
  const form = useGachaFormContext();
  return <NumberInput label="当たりの出現率" {...form.getInputProps('prob')} />;
};
