import { NextPage } from "next";
import Head from "next/head";
import { About } from "../../components/about/About";
import { FAQ } from "../../components/about/FAQ";
import { Header } from "../../components/about/Header";
import { Intro } from "../../components/about/Intro";
import { MarkdownStyle } from "../../components/about/MarkdownStyle";
import { PrivacyAndTerms } from "../../components/about/PrivacyAndTerms";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - {process.env.APP_NAME}</title>
      </Head>

      <main>
        <MarkdownStyle>
          <Header />
          <Intro />
          <About />
          <FAQ />
          <PrivacyAndTerms />
        </MarkdownStyle>
      </main>
    </>
  );
};
export default HomePage;
