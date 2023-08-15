import { Box, Space } from '@mantine/core';
import { GachaFormProvider, useGachaForm, zodSchema } from '@/features/form/GachaContext';
import { ProbInput } from '@/features/form/ProbInput';
import { AttemptsInput } from '@/features/form/AttemptsInput';
import { Result } from '@/features/form/Result';
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
      <Box maw={400} mx="auto">
        <ProbInput></ProbInput>
        <Space h="md" />
        <AttemptsInput></AttemptsInput>
        <Space h="md" />
        <Result></Result>
      </Box>
    </GachaFormProvider>
  );
};
