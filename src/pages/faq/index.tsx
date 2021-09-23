import { Container } from "@mui/material";
import Head from "next/head";
import { ExtendedNextPage } from "~/types/next-page";
import { FAQ } from "../../components/about/FAQ";
import { Header } from "../../components/about/Header";
import { MarkdownStyle } from "../../components/about/MarkdownStyle";
import { APP_NAME } from "../../core/env";

const HomePage: ExtendedNextPage = () => {
  return (
    <>
      <Head>
        <title>FAQ - {APP_NAME}</title>
      </Head>

      <FAQ />
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
