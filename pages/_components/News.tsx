import { useQuery } from '@tanstack/react-query';
import { Col, Flex, Image, Row, Spin, Typography } from 'antd/lib';
import { useState } from 'react';
import { Paginator } from '../../components/Paginator';
import { getNews } from '../_lib/getNews';

export interface Blog {
  title: string;
  content_text: string;
  user_id: number;
  photo_url: string;
  created_at: string;
  id: number;
  description: string;
  content_html: string;
  category: string;
  updated_at: string;
}

export const News = () => {
  const [offset, setOffset] = useState(1);

  const limit = 10;

  const { data, isLoading } = useQuery({
    queryKey: ['news', offset, limit],
    queryFn: () => getNews(limit, offset),
  });

  const onChange = (pageNumber: number) => {
    setOffset(pageNumber);
  };

  const customStyle = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
  };

  const content = <div style={customStyle} />;
  return (
    <Flex vertical align="center" gap={24}>
      {isLoading ? (
        <Spin tip="Loading...">{content}</Spin>
      ) : (
        <>
          {data?.blogs.map((blog: Blog) => (
            <div
              className="border p-4 rounded-md w-full max-w-[40rem]"
              key={blog.id}
            >
              <Row gutter={12}>
                <Col span={4}>
                  <Typography.Text>
                    {new Intl.DateTimeFormat('ru').format(
                      new Date(blog.created_at)
                    )}
                  </Typography.Text>
                </Col>
                <Col span={8}>
                  <Typography.Title level={4}>{blog.title}</Typography.Title>
                </Col>
                <Col span={12}>
                  <Image
                    loading="lazy"
                    src={blog.photo_url}
                    alt="news-photo"
                    width="100%"
                    height={200}
                  />
                </Col>
              </Row>
            </div>
          ))}
          <Paginator
            total={data?.total_blogs ?? 0}
            current={offset}
            onChange={onChange}
          />
        </>
      )}
    </Flex>
  );
};
