import { Button, Group, TextInput, Box } from '@mantine/core';
import { useGachaFormContext } from '@/features/form/GachaContext';
import { useEffect } from 'react';

export const AttemptsInput = (): JSX.Element => {
  const form = useGachaFormContext();

  const addAttempts = (attempts: number): void => {
    const prev = form.values.attempts;
    if (Number.isInteger(prev)) {
      form.setFieldValue('attempts', prev + attempts);
    } else {
      form.setFieldValue('attempts', attempts);
    }
  };

  useEffect(() => {
    form.isValid();
  }, [form.values.attempts]);

  return (
    <Box>
      <TextInput
        label="ガチャを試す回数"
        {...form.getInputProps('attempts')}
      />
      <Group>
        <Button.Group>
          <Button variant="outline" onClick={() => { addAttempts(10); }} >+10</Button>
          <Button variant="outline" color="red" onClick={() => { addAttempts(-10); }}>-10</Button>
        </Button.Group>
        <Button.Group>
          <Button variant="outline" onClick={() => { addAttempts(100); }} >+100</Button>
          <Button variant="outline" color="red" onClick={() => { addAttempts(-100); }}>-100</Button>
        </Button.Group>

      </Group>
    </Box>
  );
};
