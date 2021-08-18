import { NextPage } from "next";
import Head from "next/head";
import NewFleet from "../../components/new-fleet";
import { APP_NAME } from "../../core/env";

const NewFleetPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>

      <NewFleet />
    </>
  );
};
export default NewFleetPage;
