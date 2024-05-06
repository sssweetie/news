import { News } from '@/pages/_components/News';
import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { getNews } from './_lib/getNews';

interface HomeProps {
  dehydratedState: DehydratedState;
}

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

export default function Home({ dehydratedState }: HomeProps) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <News />
    </HydrationBoundary>
  );
}
