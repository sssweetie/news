import { Typography, Image, Flex } from 'antd/lib';
import React from 'react';
import { Blog } from './News';
import Link from 'next/link';
import { getDate } from '../_utils/getDate';

export type BlogPostProps = Pick<
  Blog,
  'id' | 'created_at' | 'title' | 'photo_url'
>;

export const BlogPost = ({
  id,
  created_at,
  title,
  photo_url,
}: BlogPostProps) => {
  const date = getDate(created_at);

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
      <Link
        href={`/blog/${encodeURIComponent(id)}`}
        className="font-medium text-black  hover:underline"
      >
        {title}
      </Link>
      <Typography.Text className="self-end">{date}</Typography.Text>
    </Flex>
  );
};
