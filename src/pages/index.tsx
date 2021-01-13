import React from 'react';

import Head from 'next/head';

import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pomodoro Timer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout activePage="Timer">
        <h1>Hello World</h1>
      </Layout>
    </>
  );
};

export default Home;
