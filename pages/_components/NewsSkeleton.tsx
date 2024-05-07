import { BlogPostSkeleton } from './BlogPostSkeleton';

interface NewsSkeletonProps {
  limit: number;
}

export const NewsSkeleton = ({ limit }: NewsSkeletonProps) => {
  const news = [];

  for (let i = 0; i < limit; i++) {
    news.push(<BlogPostSkeleton key={i} />);
  }

  return news;
};
