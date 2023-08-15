import { Box } from '@mantine/core';
import { GachaFormProvider, useGachaForm } from '@/features/form/GachaContext';
import { ProbInput } from '@/features/form/ProbInput';
import { AttemptsInput } from '@/features/form/AttemptsInput';
import { Result } from '@/features/form/Result';
import { zodResolver } from '@mantine/form'; // https://mantine.dev/form/validators/
import { z } from 'zod';

const zodSchema = z.object({
  attempts: z.number().min(10, { message: '回数は10以上必須' })
});

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
        <AttemptsInput></AttemptsInput>
        <Result></Result>
      </Box>
    </GachaFormProvider>
  );
};
