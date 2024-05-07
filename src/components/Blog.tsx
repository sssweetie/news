import { BlogSkeleton } from '@/src/components/BlogSkeleton';
import { useBlog } from '@/src/hooks/useBlog';
import { Button, Flex, Image, Typography } from 'antd/lib';

export const Blog = () => {
  const { title, created_at, description, photo_url, isLoading, onClick } =
    useBlog();

  return !isLoading ? (
    <Flex
      vertical
      className="max-w-[75rem] justify-center items-center mx-auto mt-8 border-2 p-8 bg-white"
    >
      <button type="button" onClick={onClick} className="w-fit mb-4">
        Back
      </button>
      <Typography.Title level={2}>{title}</Typography.Title>
      <Typography.Paragraph>{created_at}</Typography.Paragraph>
      <Typography.Paragraph>{description}</Typography.Paragraph>
      <Image
        preview={false}
        src={photo_url}
        width="100%"
        height={400}
        className="object-cover"
        alt="blog photo"
      />
    </Flex>
  ) : (
    <BlogSkeleton />
  );
};
