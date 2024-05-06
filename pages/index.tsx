import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from '@tanstack/react-query';
import { Spin } from 'antd';
import { Pagination } from 'antd/lib';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useState } from 'react';

interface HomeProps {
  dehydratedState: DehydratedState;
}

interface Blog {
  title: string;
}

interface PaginatorProps {
  blogsCount: number;
  current: number;
  onChange: (number: number) => void;
}

type Query = number | string | string[] | undefined;

const getNews = async (limit: Query, offset: Query) =>
  (await axios.get(`/api/news?limit=${limit}&offset=${offset}`)).data;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { limit, offset } = query;

  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ['news', offset, limit],
    queryFn: () => getNews(limit, offset),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

function Paginator({ blogsCount, current, onChange }: PaginatorProps) {
  return (
    <Pagination total={blogsCount} current={current} onChange={onChange} />
  );
}

function News() {
  const [offset, setOffset] = useState(1);

  const limit = 10;

  const { data, isLoading } = useQuery({
    queryKey: ['news', offset, limit],
    queryFn: () => getNews(limit, offset),
  });

  const onChange = (pageNumber: number) => {
    setOffset(pageNumber);
  };

  const customStyle = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
  };

  const content = <div style={customStyle} />;

  return (
    <div>
      {data?.blogs.map((blog: Blog) => (
        <p key={blog.title}>{blog.title}</p>
      ))}
      {isLoading ? (
        <Spin tip="Loading...">{content}</Spin>
      ) : (
        <Paginator
          blogsCount={data.total_blogs}
          current={offset}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default function Home({ dehydratedState }: HomeProps) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <News />
    </HydrationBoundary>
  );
}
