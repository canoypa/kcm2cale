import { FC } from "react";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { MainAppBar } from "../common/main-app-bar";
import { CreateNewFleet } from "./create-new-fleet";
import { FleetListArea } from "./fleet-list-area";
import * as styles from "./styles";

export const Home: FC = () => {
  const setPageTitle = useSetPageTitle();
  setPageTitle("Kcm2Cale β");

  return (
    <div className={styles.container}>
      <MainAppBar />
      <FleetListArea />
      <CreateNewFleet />
    </div>
  );
};

export default Home;
