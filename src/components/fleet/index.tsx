import { FC, useContext, useEffect } from "react";
import { Redirect, useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { LowerAppBar } from "../common/lower-app-bar";
import { FleetDataProvider } from "./fleet-data-provider";
import { FleetIdContext } from "./fleetIdContext";
import { useFleet } from "./hooks";
import { Organize } from "./organisms/organize";

const Fleet: FC = () => {
  const { push } = useHistory();

  const setPageTitle = useSetPageTitle();

  const fleetId = useContext(FleetIdContext);
  const { data: fleet } = useFleet(fleetId);

  useEffect(() => {
    if (fleet !== undefined) {
      setPageTitle(`${fleet.title || "無題の編成"}`);
    }

    // タイトル変更時にのみ実行
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fleet]);

  const backToTopPage = () => {
    push("/");
  };

  const isExistFleet = fleet !== null;

  // Todo: エラー画面を表示
  return isExistFleet ? (
    <>
      <LowerAppBar onNavClick={backToTopPage} />
      <Organize />
    </>
  ) : (
    <Redirect to="/" />
  );
};

// next の getStaticProps みたいなもん
export const FleetPage: FC = () => {
  const { fleetId } = useParams<{ fleetId: string }>();

  return (
    <FleetIdContext.Provider value={fleetId}>
      <FleetDataProvider>
        <Fleet />
      </FleetDataProvider>
    </FleetIdContext.Provider>
  );
};
export default FleetPage;
