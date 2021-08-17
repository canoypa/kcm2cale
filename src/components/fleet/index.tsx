import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useContext } from "react";
import { LowerAppBar } from "../common/lower-app-bar";
import { FleetError } from "./error";
import { FleetIdContext } from "./fleetIdContext";
import { useFleet } from "./hooks";
import { Organize } from "./organisms/organize";

export const Fleet: FC = () => {
  const { push } = useRouter();

  const fleetId = useContext(FleetIdContext);
  const { data: fleet } = useFleet(fleetId);

  const backToTopPage = () => {
    push("/");
  };

  const isExistFleet = fleet !== null;

  // Todo: エラー画面を表示
  return isExistFleet ? (
    <>
      <Head>
        <title>
          {fleet
            ? `${fleet.title || "無題の編成"} - ${process.env.APP_NAME}`
            : process.env.APP_NAME}
        </title>
      </Head>

      <LowerAppBar onNavClick={backToTopPage} />
      <Organize />
    </>
  ) : (
    <FleetError />
  );
};
