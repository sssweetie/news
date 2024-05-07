import { useBlog } from '@/pages/_hooks/useBlog';
import { Button, Flex, Image, Typography } from 'antd/lib';

export const Blog = () => {
  const { title, created_at, description, photo_url, onClick } = useBlog();

  return (
    <Flex
      vertical
      className="max-w-[75rem] justify-center items-center mx-auto mt-8 border-2 p-8 bg-white"
    >
      <Button type="primary" onClick={onClick} className="w-fit mb-4">
        Back
      </Button>
      <Typography.Title level={2}>{title}</Typography.Title>
      <Typography.Paragraph>{created_at}</Typography.Paragraph>
      <Typography.Paragraph>{description}</Typography.Paragraph>
      <Image
        preview={false}
        src={photo_url}
        width="100%"
        height={400}
        alt="blog photo"
        className="object-cover"
      />
    </Flex>
  );
};
