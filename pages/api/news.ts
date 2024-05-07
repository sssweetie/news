import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      const { offset, limit } = req.query;
      const response = await axios.get(
        `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${offset}&limit=${limit}`
      );

      return res.status(200).send(response.data);
    } catch {
      return res.status(400);
    }
  }
}
