import { Blog } from '@/src/widgets/news/ui/News';
import axios from 'axios';
import { BlogPreviewProps } from '../../blog-preview/ui/BlogPreview';

type Query = number | string | string[] | undefined;

type BlogProps = Omit<BlogPreviewProps, 'id'> & Pick<Blog, 'description'>;

export const getBlog = async (id: Query) => {
  const response = await axios.get(`/api/blog?id=${id}`);
  return response.data.blog as BlogProps;
};
