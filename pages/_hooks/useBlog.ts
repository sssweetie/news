import { getBlog } from '@/pages/_lib/getBlog';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export const useBlog = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => getBlog(id),
  });

  const onClick = () => {
    router.back();
  };

  return {
    title: data?.title,
    created_at: data?.created_at,
    photo_url: data?.photo_url,
    description: data?.description,
    onClick,
  };
};
