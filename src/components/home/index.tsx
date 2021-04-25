import { FC, useEffect } from "react";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { MainAppBar } from "../common/main-app-bar";
import { CreateNewFleet } from "./create-new-fleet";
import { FleetListArea } from "./fleet-list-area";
import * as styles from "./styles";

export const Home: FC = () => {
  const pageViewLog = usePageViewLog();
  const setPageTitle = useSetPageTitle();

  useEffect(() => {
    setPageTitle(__APP_NAME__, { noSuffix: true });
    pageViewLog("Home");

    // マウント時にのみ実行
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <MainAppBar />
      <FleetListArea />
      <CreateNewFleet />
    </div>
  );
};

export default Home;
