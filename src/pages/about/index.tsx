import { Container } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { About } from "../../components/about/About";
import { Header } from "../../components/about/Header";
import { MarkdownStyle } from "../../components/about/MarkdownStyle";
import { APP_NAME } from "../../core/env";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - {APP_NAME}</title>
      </Head>

      <main>
        <Header />
        <Container maxWidth="md">
          <MarkdownStyle>
            <About />
          </MarkdownStyle>
        </Container>
      </main>
    </>
  );
};
export default HomePage;
