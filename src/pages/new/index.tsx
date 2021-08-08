import { NextPage } from "next";
import Head from "next/head";
import NewFleet from "../../components/new-fleet";

const NewFleetPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
      </Head>

      <NewFleet />
    </>
  );
};
export default NewFleetPage;
