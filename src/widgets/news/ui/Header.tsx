import { Typography } from 'antd/lib';
import React from 'react';

export const Header = () => {
  return (
    <header className="ml-6 animate-pulse w-fit mb-8">
      <Typography.Title style={{ margin: 0 }} level={1}>
        News
      </Typography.Title>
    </header>
  );
};
