import { Header } from '@/components/Header';
import { Flex } from 'antd/lib';
import { Html, Head, Main, NextScript } from 'next/document';

export const getServerSideProps = async () => {};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Flex align="center" justify="center" vertical>
          <Header />
          <Main />
          <NextScript />
        </Flex>
      </body>
    </Html>
  );
}
