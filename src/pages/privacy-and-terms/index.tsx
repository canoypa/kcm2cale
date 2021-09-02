import { NextPage } from "next";
import Head from "next/head";
import { Header } from "../../components/about/Header";
import { MarkdownStyle } from "../../components/about/MarkdownStyle";
import { PrivacyAndTerms } from "../../components/about/PrivacyAndTerms";
import { APP_NAME } from "../../core/env";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy And Terms - {APP_NAME}</title>
      </Head>

      <main>
        <Header />
        <MarkdownStyle>
          <PrivacyAndTerms />
        </MarkdownStyle>
      </main>
    </>
  );
};
export default HomePage;
