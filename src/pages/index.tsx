import { NextPage } from "next";
import Head from "next/head";
import { Home } from "@/components/home";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fravega Challange - Home</title>
        <meta name="description" content="Fravega Challange - Home" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
