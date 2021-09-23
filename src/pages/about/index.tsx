import { Container } from "@mui/material";
import Head from "next/head";
import { ExtendedNextPage } from "~/types/next-page";
import { About } from "../../components/about/About";
import { Header } from "../../components/about/Header";
import { MarkdownStyle } from "../../components/about/MarkdownStyle";
import { APP_NAME } from "../../core/env";

const HomePage: ExtendedNextPage = () => {
  return (
    <>
      <Head>
        <title>About - {APP_NAME}</title>
      </Head>

      <About />
    </>
  );
};
export default HomePage;

HomePage.getShearedLayout = (page) => {
  return (
    <main>
      <Header />
      <Container maxWidth="md">
        <MarkdownStyle>{page}</MarkdownStyle>
      </Container>
    </main>
  );
};
