import { BlogPreviewSkeleton } from './BlogPreviewSkeleton';

interface NewsSkeletonProps {
  limit: number;
}

export const NewsSkeleton = ({ limit }: NewsSkeletonProps) => {
  const news = [];

  for (let i = 0; i < limit; i++) {
    news.push(<BlogPreviewSkeleton key={i} />);
  }

  return news;
};
