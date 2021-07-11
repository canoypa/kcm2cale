import { FC, memo, useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { useDidMount } from "../../util/hooks/lifecycle";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { LowerAppBar } from "../common/lower-app-bar";
import { FleetContext } from "./contexts";
import { FleetDataProvider } from "./fleet-data-provider";
import { Organize } from "./organisms/organize";

const FleetComponent: FC = () => {
  const { push } = useHistory();

  const pageViewLog = usePageViewLog();
  const setPageTitle = useSetPageTitle();

  const fleet = useContext(FleetContext);

  useDidMount(() => {
    pageViewLog("Fleet View");
  });
  useEffect(() => {
    const title = fleet?.title;
    if (title !== undefined) {
      setPageTitle(`${title || "無題の編成"}`);
    }

    // タイトル変更時にのみ実行
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fleet?.title]);

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
const Fleet = memo(FleetComponent);

// next の getStaticProps みたいなもん
export const FleetPage: FC = () => {
  return (
    <FleetDataProvider>
      <Fleet />
    </FleetDataProvider>
  );
};
export default FleetPage;
