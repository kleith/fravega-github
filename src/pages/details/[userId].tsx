import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Details } from '@/components/details';
import { UserDetail } from '@/types/user';
import { Repositories } from '@/types/repos';
import { getRepositories, getUser } from '@/services/github.service';

type DetailsPageProps = {
  user: UserDetail;
  repos: Repositories;
};

const DetailsPage: NextPage<DetailsPageProps> = ({ user, repos }) => {
  return (
    <>
      <Head>
        <title>Fravega Challange - Detalle</title>
        <meta name="description" content="Fravega Challange - Detalle" />
      </Head>
      <Details user={user} repos={repos} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const userId = params?.userId as string;

  try {
    const [userData, userRepositories] = await Promise.all([
      getUser(userId),
      getRepositories(userId),
    ]);

    return {
      props: {
        user: userData,
        repos: userRepositories,
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
