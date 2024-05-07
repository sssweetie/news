import { Blog } from '@/pages/_components/News';
import axios from 'axios';
import { BlogPostProps } from '../_components/BlogPost';

type Query = number | string | string[] | undefined;

type BlogProps = Omit<BlogPostProps, 'id'> & Pick<Blog, 'description'>;

export const getBlog = async (id: Query) => {
  const response = await axios.get(`/api/blog?id=${id}`);
  return response.data.blog as BlogProps;
};
