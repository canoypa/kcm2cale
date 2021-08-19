import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { LowerAppBar } from "~/components/common/lower-app-bar";
import { APP_NAME } from "~/core/env";
import { Fleet } from "~/models/fleet";
import { Organize } from "../organisms/organize";

type Props = {
  fleet: Fleet;
};
/**
 * 編成画面
 */
export const FleetScreen: FC<Props> = ({ fleet }) => {
  const { push } = useRouter();

  const backToTopPage = () => {
    push("/");
  };

  return (
    <>
      <Head>
        <title>{`${fleet.title || "無題の編成"} - ${APP_NAME}`}</title>
      </Head>

      <LowerAppBar onNavClick={backToTopPage} />
      <Organize />
    </>
  );
};
