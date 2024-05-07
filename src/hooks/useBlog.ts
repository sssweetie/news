import { getBlog } from '@/src/lib/getBlog';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export const useBlog = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => getBlog(id),
  });

  const onClick = () => {
    router.back();
  };

  return {
    isLoading,
    title: data?.title,
    created_at: data?.created_at,
    photo_url: data?.photo_url,
    description: data?.description,
    onClick,
  };
};