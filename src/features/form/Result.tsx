import { List, Space, Table, Text } from '@mantine/core';
import { useGachaFormContext } from '@/features/form/GachaContext';
import { Gacha } from '@/features/form/utils';
import { roundDecimal } from 'decimal-utils';
import dynamic from 'next/dynamic';
const ResultChart = dynamic(async () => await import('@/features/form/ResultChart'), { ssr: false });

const formatProb = (prob: number): string => {
  return `${roundDecimal(prob * 100, 2)}%`;
};

export const Result = (): JSX.Element => {
  const form = useGachaFormContext();
  const gacha = new Gacha({ prob: form.values.prob, count: form.values.attempts });
  if (!form.isValid()) {
    return <></>;
  }
  return (
    <>
      <List spacing={4} mb={'sm'}
        icon={<></>} center
      >
        <List.Item>
          <Text fz="xl">1回以上当たる確率は
            <Text component='span' fw={'bold'} c={'red'}>{ formatProb(gacha.anySuccessProb()) }</Text>
          </Text>
        </List.Item>
        <List.Item mb={'sm'}>
          <Text fz="xl">全て外れる確率は
            <Text component='span' fw={'bold'}>{ formatProb(gacha.allFailProb()) }</Text>
          </Text>
        </List.Item>
        {[50, 70, 95].map((threshold, index) =>
          <List.Item key={index}>
            {threshold}%の人は<Text component='span' fw={'bold'}>{gacha.anySuccessCount(threshold)}</Text>回やれば1回は当たる
          </List.Item>
        )}
        <List.Item>
          1%の人は<Text component='span' fw={'bold'} c={'red'}>{gacha.anySuccessCount(99) }</Text>回やっても全て外れる🤪
        </List.Item>
      </List>

      <Space h={'md'}></Space>

      <ResultChart data={
        [0, 1, 2, 3, 4, 5].map((hit) => ({ count: hit, prob: roundDecimal(gacha.SuccessProbByHit(hit) * 100, 2) }))
      }></ResultChart>

      <Table striped withBorder>
        <thead>
          <tr>
            <th>当選回数</th>
            <th>当選確率</th>
          </tr>
        </thead>
        <tbody>
          {
            [0, 1, 2, 3, 4, 5].map((hit, index) => (
              <tr key={index}>
                <td>{hit}</td>
                <td>{ formatProb(gacha.SuccessProbByHit(hit)) }</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  );
};
