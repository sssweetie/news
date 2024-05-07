import { Typography } from 'antd/lib';
import React from 'react';

export const Header = () => {
  return (
    <header className="  mt-10  animate-pulse w-fit ml-6">
      <Typography.Title style={{ margin: 0 }} level={1}>
        News
      </Typography.Title>
    </header>
  );
};
