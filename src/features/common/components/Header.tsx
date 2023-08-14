import { Title } from '@mantine/core';

export const Header = (): JSX.Element => {
  return (
    <>
      <Title order={1}
        sx={(theme) => ({
          marginTop: theme.spacing.md
        })}
      >Create Next App</Title>
    </>
  );
};
