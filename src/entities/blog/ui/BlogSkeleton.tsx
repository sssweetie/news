import { Flex, Skeleton } from 'antd/lib';
import React from 'react';

export const BlogSkeleton = () => {
  return (
    <Flex
      vertical
      className="max-w-[75rem] w-full justify-center items-center mx-auto mt-8 border-2 p-8 bg-white"
    >
      <Skeleton.Button style={{ marginBottom: '1.5rem' }} />
      <Skeleton active paragraph={true} style={{ marginBottom: '2rem' }} />
      <Skeleton.Image active style={{ width: '100%', height: 400 }} />
    </Flex>
  );
};
