import { GetServerSideProps } from 'next';
import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getBlog } from '../../src/entities/blog/api/getBlog';
import { Blog } from '../../src/entities/blog/ui/Blog';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['blog', id],
    queryFn: () => getBlog(id),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Page({
  dehydratedState,
}: {
  dehydratedState: DehydratedState;
}) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Blog />
    </HydrationBoundary>
  );
}
