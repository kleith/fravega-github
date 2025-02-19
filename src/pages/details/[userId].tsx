import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Details } from '@/components/details';
import { UserDetail } from '@/types/user';
import axios from 'axios';
import { getUser } from '@/services/github.service';

const DetailsPage: NextPage<{ user: UserDetail }> = ({ user }) => {
  return (
    <>
      <Head>
        <title>Fravega Challange - Detalle</title>
        <meta name="description" content="Fravega Challange - Detalle" />
      </Head>
      <Details user={user} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const userId = params?.userId as string;

  try {
    const userData = await getUser(userId);

    return {
      props: {
        user: userData,
      },
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return {
        notFound: true,
      };
    }
    throw error;
  }
};

export default DetailsPage;
