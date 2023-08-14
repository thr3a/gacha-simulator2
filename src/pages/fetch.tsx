import type { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import { Text } from '@mantine/core';

type RepositoryProps = {
  id: number
  name: string
  full_name: string
  description: string
  stargazers_count: number
} & Record<string, unknown>;

const fetchRepositories = async (): Promise<RepositoryProps[]> => {
  const response = await fetch('https://api.github.com/orgs/facebook/repos');
  return await response.json();
};

const Posts = (): JSX.Element => {
  const { data, isLoading, isError } = useQuery(['qiita'], async () => {
    const data = await fetchRepositories();
    return data;
  });

  if (isLoading) {
    return <Text>読み込み中</Text>;
  }

  if (data === undefined || isError) {
    return <Text>エラーが発生しました</Text>;
  }

  return (
    <>
      {
        data.map((repo) => {
          return (
            <p key={repo.id}>{repo.name} / {repo.description}</p>
          );
        })
      }
    </>
  );
};

const FetchPage: NextPage = () => {
  return (
    <Posts></Posts>
  );
};

export default FetchPage;
