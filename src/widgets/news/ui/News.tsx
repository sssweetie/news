import { Alert, Flex } from 'antd/lib';
import { Paginator } from '../../../shared/components/Paginator';
import { NewsSkeleton } from './NewsSkeleton';
import { Header } from '@/src/widgets/news/ui/Header';
import { useNews } from '../model/useNews';
import { BlogPreview } from '@/src/entities/blog-preview/ui/BlogPreview';

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
  const { data, isLoading, limit, offset, isError, error, onChange } =
    useNews();

  return isError ? (
    <Alert type="error" message={error?.message} />
  ) : (
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
          className="w-fit bg-white"
          total={data?.total_blogs ?? 0}
          current={offset}
          onChange={onChange}
        />
      )}
    </div>
  );
};
