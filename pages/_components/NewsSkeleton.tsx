import { BlogPostSkeleton } from './BlogPostSkeleton';

interface NewsSkeletonProps {
  limit: number;
  isLoading: boolean;
}

export const NewsSkeleton = ({ limit, isLoading }: NewsSkeletonProps) => {
  const news = [];

  for (let i = 0; i < limit; i++) {
    news.push(<BlogPostSkeleton isLoading={isLoading} />);
  }

  return news;
};
