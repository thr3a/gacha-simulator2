import { List, Table } from '@mantine/core';
import { useGachaFormContext } from '@/features/form/GachaContext';
import { Gacha } from '@/features/form/utils';
import { roundDecimal } from 'decimal-utils';

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
      <List spacing={3}>
        <List.Item>
          1回以上当たる確率は{ formatProb(gacha.anySuccessProb()) }
        </List.Item>
        <List.Item mb={'sm'}>
          全て外れる確率は { formatProb(gacha.allFailProb()) }
        </List.Item>
        {[50, 70, 95].map((threshold, index) =>
          <List.Item key={index}>
            {threshold}%の人は {gacha.anySuccessCount(threshold)}回やれば、1回は当たる
          </List.Item>
        )}
        <List.Item>
          1%の人は {gacha.anySuccessCount(99) }回やっても全て外れる🤪
        </List.Item>
      </List>
      <Table striped withBorder>
        <thead>
          <tr>
            <th>出現回数</th>
            <th>確率</th>
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
