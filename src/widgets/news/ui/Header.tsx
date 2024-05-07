import { Typography } from 'antd/lib';
import React from 'react';

export const Header = () => {
  return (
    <header className="animate-pulse ml-6 w-fit mb-8">
      <Typography.Title style={{ margin: 0 }} level={1}>
        News
      </Typography.Title>
    </header>
  );
};
