import { Pagination } from 'antd/lib';

interface PaginatorProps {
  total: number;
  current: number;
  style: object;
  className: string;
  onChange: (number: number) => void;
}

export const Paginator = ({
  total,
  style,
  className,
  current,
  onChange,
}: PaginatorProps) => {
  return (
    <Pagination
      style={style}
      className={className}
      total={total}
      current={current}
      onChange={onChange}
    />
  );
};
