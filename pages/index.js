import Head from 'next/head';

import Header from 'components/Header';
import AboutMe from 'components/AboutMe';
import Projects from 'components/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Renato Granados | Portfolio</title>
        <meta name='description' content='Portfolio of Renato Granados' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <AboutMe />
      <Projects />
    </>
  );
}
