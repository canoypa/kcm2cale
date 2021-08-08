import { Box, Divider } from "@material-ui/core";
import { NextPage } from "next";
import Head from "next/head";
import { Message } from "../components/404/Message";
import { SadFace } from "../components/404/SadFace";
import { TopPageLink } from "../components/404/TopPageLink";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - {process.env.APP_NAME}</title>
      </Head>

      <Box display="flex" justifyContent="center" padding={3}>
        <Box maxWidth={599}>
          <SadFace />
          <Divider />
          <Message />
          <TopPageLink />
        </Box>
      </Box>
    </>
  );
};
export default NotFoundPage;
