import { Pagination } from 'antd/lib';

interface PaginatorProps {
  total: number;
  current: number;
  className: string;
  onChange: (number: number) => void;
}

export const Paginator = ({
  total,
  className,
  current,
  onChange,
}: PaginatorProps) => {
  return (
    <Pagination
      className={className}
      total={total}
      current={current}
      onChange={onChange}
    />
  );
};
