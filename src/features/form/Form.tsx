import { AttemptsInput } from '@/features/form/AttemptsInput';
import { GachaFormProvider, useGachaForm, zodSchema } from '@/features/form/GachaContext';
import { ProbInput } from '@/features/form/ProbInput';
import { Result } from '@/features/form/Result';
import { Box, Space } from '@mantine/core';
import { zodResolver } from '@mantine/form'; // https://mantine.dev/form/validators/

export const GachaForm = (): JSX.Element => {
  const form = useGachaForm({
    validateInputOnChange: true,
    initialValues: {
      prob: 1,
      attempts: 30
    },
    validate: zodResolver(zodSchema)
  });

  return (
    <GachaFormProvider form={form}>
      <Box maw={400} mx='auto'>
        <ProbInput />
        <Space h='md' />
        <AttemptsInput />
        <Space h='md' />
        <Result />
      </Box>
    </GachaFormProvider>
  );
};
