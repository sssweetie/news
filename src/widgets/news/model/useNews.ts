import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getNews } from '../api/getNews';

const limit = 10;

export const useNews = () => {
  const router = useRouter();
  const initialOffset = router.query.offset;
  const [offset, setOffset] = useState(
    initialOffset ? Number(initialOffset) : 1
  );

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['news', offset, limit],
    queryFn: () => getNews(limit, offset),
  });

  const updateQueryParams = (pageNumber: number) => {
    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, offset: pageNumber, limit },
      },
      undefined,
      { shallow: true }
    );
  };

  const onChange = (pageNumber: number) => {
    setOffset(pageNumber);
    updateQueryParams(pageNumber);
  };

  useEffect(() => {
    updateQueryParams(offset);
  }, []);

  return { data, isLoading, isError, limit, offset, error, onChange };
};
