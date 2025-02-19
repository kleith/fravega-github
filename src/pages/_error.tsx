import { Error } from '@/components/error';
import { NextPageContext } from 'next';
import Head from 'next/head';

type ErrorProps = {
  statusCode?: number;
};

function ErrorPage({ statusCode }: ErrorProps) {
  return (
    <>
      <Head>
        <title>Error page</title>
      </Head>
      <Error statusCode={statusCode} />
    </>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default ErrorPage;
