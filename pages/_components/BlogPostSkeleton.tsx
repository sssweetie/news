import { Skeleton } from 'antd/lib';
import React from 'react';

interface BlogPostSkeletonProps {
  isLoading: boolean;
}

export const BlogPostSkeleton = ({ isLoading }: BlogPostSkeletonProps) => {
  return (
    isLoading && (
      <div className="border p-4 rounded-md w-full bg-slate-100 max-w-[25rem]">
        <Skeleton.Image
          active
          style={{ width: '23rem', height: '12.5rem', marginBottom: '1rem' }}
        />
        <Skeleton paragraph={false} title={{ width: 200 }}></Skeleton>
      </div>
    )
  );
};
