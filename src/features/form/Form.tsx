import { NumberInput, Group, Button, Box } from '@mantine/core';
import { GachaFormProvider, useGachaForm } from '@/features/form/GachaContext';
import { ProbInput } from '@/features/form/ProbInput';
import { AttemptsInput } from '@/features/form/AttemptsInput';
import { Result } from '@/features/form/Result';
// import { isNotEmpty, isInRange } from '@mantine/form'; // https://mantine.dev/form/validators/

export const GachaForm = (): JSX.Element => {
  const form = useGachaForm({
    initialValues: {
      prob: 1,
      attempts: 30
    },

    validate: {
      // name: isNotEmpty('名前は必須項目です'),
      // age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register')
    }
  });

  const handleSubmit = (): void => {
    console.log(form.values);
  };

  return (
    <GachaFormProvider form={form}>
      <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => { handleSubmit(); })}>
        <ProbInput></ProbInput>
        <AttemptsInput></AttemptsInput>
        <Result></Result>
      </Box>
    </GachaFormProvider>
  );
};
