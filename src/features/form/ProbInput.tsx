import { Button, Group, TextInput } from '@mantine/core';
import { useGachaFormContext, PROB_PRESETS } from '@/features/form/GachaContext';
import { useEffect } from 'react';

export const ProbInput = (): JSX.Element => {
  const form = useGachaFormContext();

  const setProb = (prob: number): void => {
    form.setFieldValue('prob', prob);
  };

  useEffect(() => {
    form.isValid();
  }, [form.values.prob]);

  return (
    <>
      <TextInput
        label="当たりの出現率"
        {...form.getInputProps('prob')}
        rightSection={'%'}
      />
      <Group spacing={2}>
        {
          PROB_PRESETS.map((prob, index) => (
            <Button
              sx={(theme) => ({
                padding: theme.spacing.xs
              })}
              key={index} variant="outline" onClick={() => { setProb(prob); }} >{prob}</Button>
          ))
        }

      </Group>
    </>
  );
};
