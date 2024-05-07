import { Flex } from 'antd/lib';
import { Paginator } from '../../components/Paginator';
import { BlogPreview } from './BlogPreview';
import { NewsSkeleton } from './NewsSkeleton';
import { useNews } from '../_hooks/useNews';
import { Header } from '@/components/Header';

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
  const { data, isLoading, limit, offset, onChange } = useNews();

  return (
    <div className="py-10">
      <Header />
      <Flex wrap gap={24} className="mb-4 justify-center">
        {isLoading && <NewsSkeleton limit={limit} />}
        {data?.blogs.map((blog: Blog) => (
          <BlogPreview
            key={blog.id}
            created_at={blog.created_at}
            title={blog.title}
            id={blog.id}
            photo_url={blog.photo_url}
          />
        ))}
      </Flex>
      {!isLoading && (
        <Paginator
          style={{ margin: '0 auto' }}
          className="w-fit"
          total={data?.total_blogs ?? 0}
          current={offset}
          onChange={onChange}
        />
      )}
    </div>
  );
};
