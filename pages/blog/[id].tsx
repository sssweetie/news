import { GetServerSideProps } from 'next';
import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getBlog } from '../../src/lib/getBlog';
import { Blog } from '../../src/components/Blog';

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
      <Blog />
    </HydrationBoundary>
  );
}
