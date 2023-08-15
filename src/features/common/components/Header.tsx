import { Title, Anchor } from '@mantine/core';

export const Header = (): JSX.Element => {
  return (
    <>
      <Anchor href="/">
        <Title order={2}
          sx={(theme) => ({
            marginTop: theme.spacing.md
          })}
        >ガチャシュミレーター</Title>
      </Anchor>
      <Title
        color="dimmed"
        order={5}
        sx={(theme) => ({
          marginBottom: theme.spacing.sm
        })}
      >スマホゲームなどのガチャ確率計算ツール</Title>
    </>
  );
};
