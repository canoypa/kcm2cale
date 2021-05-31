import { AppBar, Box, Grid } from "@material-ui/core";
import { FC } from "react";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { useDidMount } from "../../util/hooks/lifecycle";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { MainAppBar } from "../common/main-app-bar";
import { CreateNewFleet } from "./create-new-fleet";
import { FleetListArea } from "./fleet-list-area";

export const Home: FC = () => {
  const pageViewLog = usePageViewLog();
  const setPageTitle = useSetPageTitle();

  useDidMount(() => {
    setPageTitle(__APP_NAME__, { noSuffix: true });
    pageViewLog("Home");
  });

  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      style={{ height: "100vh" }}
    >
      <MainAppBar />
      <Box flexGrow={1}>
        <FleetListArea />
      </Box>
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        style={{ bottom: 0 }}
      >
        <CreateNewFleet />
      </AppBar>
    </Grid>
  );
};

export default Home;
