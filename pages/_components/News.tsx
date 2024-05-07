import { useQuery } from '@tanstack/react-query';
import { Flex } from 'antd/lib';
import { useState } from 'react';
import { Paginator } from '../../components/Paginator';
import { getNews } from '../_lib/getNews';
import { BlogPost } from './BlogPost';

export interface Blog {
  title: string;
  content_text: string;
  user_id: number;
  photo_url: string;
  created_at: string;
  id: number;
  description: string;
  content_html: string;
  category: string;
  updated_at: string;
}

export const News = () => {
  const [offset, setOffset] = useState(1);

  const limit = 10;

  const { data, isLoading } = useQuery({
    queryKey: ['news', offset, limit],
    queryFn: () => getNews(limit, offset),
  });

  const onChange = (pageNumber: number) => {
    setOffset(pageNumber);
  };

  return (
    <div className="py-10">
      {!isLoading && (
        <>
          <Flex wrap gap={24} className="mb-4">
            {data?.blogs.map((blog: Blog) => (
              <BlogPost
                key={blog.id}
                created_at={blog.created_at}
                title={blog.title}
                id={blog.id}
                photo_url={blog.photo_url}
              />
            ))}
          </Flex>
          <Paginator
            className="mx-auto w-fit"
            total={data?.total_blogs ?? 0}
            current={offset}
            onChange={onChange}
          />
        </>
      )}
    </div>
  );
};
