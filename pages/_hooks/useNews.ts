import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { getNews } from '../_lib/getNews';

const limit = 10;

export const useNews = () => {
  const router = useRouter();

  const [offset, setOffset] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ['news', offset, limit],
    queryFn: () => getNews(limit, offset),
  });

  const updateQueryParams = useCallback(
    (pageNumber: number) => {
      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, offset: pageNumber, limit },
        },
        undefined,
        { shallow: true }
      );
    },
    [router]
  );

  const onChange = (pageNumber: number) => {
    setOffset(pageNumber);
    updateQueryParams(pageNumber);
  };

  useEffect(() => {
    updateQueryParams(offset);
  }, [offset, updateQueryParams]);

  return { data, isLoading, limit, offset, onChange };
};