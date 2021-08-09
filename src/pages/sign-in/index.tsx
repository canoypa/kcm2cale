import { NextPage } from "next";
import Head from "next/head";
import { SignIn } from "../../components/signin";

const SignInPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>サインイン - {process.env.APP_NAME}</title>
      </Head>

      <SignIn />
    </>
  );
};
export default SignInPage;
