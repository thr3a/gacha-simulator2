import { TextInput } from '@mantine/core';
import { useUserFormContext } from '@/features/form2/UserContext';

export const NameInput = (): JSX.Element => {
  const form = useUserFormContext();
  return <TextInput label="Name" withAsterisk {...form.getInputProps('name')} />;
};
