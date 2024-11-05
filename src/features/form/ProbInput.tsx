import { PROB_PRESETS, useGachaFormContext } from '@/features/form/GachaContext';
import { Button, Group, TextInput } from '@mantine/core';
import { useEffect } from 'react';

export const ProbInput = (): JSX.Element => {
  const form = useGachaFormContext();

  const setProb = (prob: number): void => {
    form.setFieldValue('prob', prob);
  };

  useEffect(() => {
    form.isValid();
  }, [form]);

  return (
    <>
      <TextInput label='当たりの出現率' {...form.getInputProps('prob')} rightSection={'%'} />
      <Group spacing={2}>
        {PROB_PRESETS.map((prob, index) => (
          <Button
            sx={(theme) => ({
              padding: theme.spacing.xs
            })}
            key={index}
            variant='outline'
            onClick={() => {
              setProb(prob);
            }}
          >
            {prob}
          </Button>
        ))}
      </Group>
    </>
  );
};
