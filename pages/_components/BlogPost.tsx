import { Typography, Image, Flex } from 'antd/lib';
import React from 'react';
import { Blog } from './News';

export const BlogPost = ({
  id,
  created_at,
  title,
  photo_url,
}: Pick<Blog, 'id' | 'created_at' | 'title' | 'photo_url'>) => {
  const date = new Intl.DateTimeFormat('ru').format(new Date(created_at));

  return (
    <Flex
      vertical
      className="border p-4 rounded-md w-full bg-slate-100 max-w-[25rem]"
      key={id}
      gap={8}
    >
      <Image
        loading="lazy"
        src={photo_url}
        alt="news-photo"
        width="100%"
        height={200}
      />
      <Typography.Title style={{ margin: 0 }} level={4}>
        {title}
      </Typography.Title>
      <Typography.Text className="self-end">{date}</Typography.Text>
    </Flex>
  );
};
