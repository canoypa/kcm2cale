import { AppBar, Box, Grid } from "@material-ui/core";
import { NextPage } from "next";
import Head from "next/head";
import { MainAppBar } from "../components/common/main-app-bar";
import { CreateNewFleet } from "../components/home/create-new-fleet";
import { FleetListArea } from "../components/home/fleet-list-area";
import { APP_NAME } from "../core/env";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta
          name="description"
          content="艦隊これくしょん向けの編成管理アプリ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kcm2cale.web.app" />
        <meta property="og:title" content="Kcm2Cale" />
        <meta
          property="og:description"
          content="艦隊これくしょん向けの編成管理アプリ"
        />
        <meta name="twitter:card" content="summary" />
      </Head>

      <main>
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
      </main>
    </>
  );
};
export default HomePage;