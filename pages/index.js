import Head from 'next/head';

import Header from 'components/Header';
import AboutMe from 'components/AboutMe';
import Projects from 'components/Projects';
// import NextProjects from 'components/NextProjects';
import Inpirations from 'components/Inpirations';
import FormSection from 'components/FormSection';
import Footer from 'components/Footer';
import StickyNav from 'components/StickyNav';

export default function Home() {
  return (
    <>
      <Head>
        <title>Renato Granados | Portfolio</title>
        <meta name='description' content='Portfolio of Renato Granados' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <StickyNav />
        <AboutMe />
        <Projects />
        {/* <NextProjects /> */}
        <Inpirations />
        <FormSection />
        <Footer />
      </main>
    </>
  );
}
