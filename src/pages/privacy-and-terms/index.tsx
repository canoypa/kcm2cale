import { Container } from "@mui/material";
import Head from "next/head";
import { ExtendedNextPage } from "~/types/next-page";
import { Header } from "../../components/about/Header";
import { MarkdownStyle } from "../../components/about/MarkdownStyle";
import { PrivacyAndTerms } from "../../components/about/PrivacyAndTerms";
import { APP_NAME } from "../../core/env";

const PrivacyAndTermsPage: ExtendedNextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy And Terms - {APP_NAME}</title>
      </Head>

      <PrivacyAndTerms />
    </>
  );
};
export default PrivacyAndTermsPage;

PrivacyAndTermsPage.getShearedLayout = (page) => {
  return (
    <main>
      <Header />
      <Container maxWidth="md">
        <MarkdownStyle>{page}</MarkdownStyle>
      </Container>
    </main>
  );
};
