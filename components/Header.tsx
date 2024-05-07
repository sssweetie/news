import { Typography } from 'antd/lib';
import React from 'react';

export const Header = () => {
  return (
    <header className="border-2 border-black py-4 px-8 mt-10 rounded-md animate-pulse">
      <Typography.Title style={{ margin: 0 }} level={1}>
        News
      </Typography.Title>
    </header>
  );
};
