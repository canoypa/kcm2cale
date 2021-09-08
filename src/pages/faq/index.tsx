import { Container } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { FAQ } from "../../components/about/FAQ";
import { Header } from "../../components/about/Header";
import { MarkdownStyle } from "../../components/about/MarkdownStyle";
import { APP_NAME } from "../../core/env";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>FAQ - {APP_NAME}</title>
      </Head>

      <main>
        <Header />
        <Container maxWidth="md">
          <MarkdownStyle>
            <FAQ />
          </MarkdownStyle>
        </Container>
      </main>
    </>
  );
};
export default HomePage;