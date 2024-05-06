import { Pagination } from 'antd/lib';

interface PaginatorProps {
  total: number;
  current: number;
  onChange: (number: number) => void;
}

export const Paginator = ({ total, current, onChange }: PaginatorProps) => {
  return <Pagination total={total} current={current} onChange={onChange} />;
};
