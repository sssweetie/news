import { Blog } from '@/src/components/News';
import axios from 'axios';

export type Query = number | string | string[] | undefined;

interface News {
  success: true;
  total_blogs: number;
  message: string;
  offset: number;
  limit: number;
  blogs: Blog[];
}

export const getNews = async (limit: Query, offset: Query) => {
  const response = await axios.get(`/api/news?limit=${limit}&offset=${offset}`);
  return response.data as News;
};
