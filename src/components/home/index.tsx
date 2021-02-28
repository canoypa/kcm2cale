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
  setPageTitle(__APP_NAME__, { noSuffix: true });

  useEffect(() => {
    pageViewLog("Home");
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
