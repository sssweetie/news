import { News } from '@/src/components/News';
import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { getNews } from '../src/lib/getNews';

interface HomeProps {
  dehydratedState: DehydratedState;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { limit, offset } = query;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
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
