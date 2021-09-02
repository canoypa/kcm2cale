import { Button, Typography } from "@material-ui/core";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Error, ErrorActions, ErrorContent } from "~/components/Error";
import { APP_NAME } from "../core/env";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - {APP_NAME}</title>
      </Head>

      <Error>
        <ErrorContent>
          <Typography>
            リクエストされたページはこのサイトに存在しません。
          </Typography>
        </ErrorContent>
        <ErrorActions>
          <Link href="/" passHref>
            <Button variant="outlined">トップページに戻る</Button>
          </Link>
        </ErrorActions>
      </Error>
    </>
  );
};
export default NotFoundPage;
