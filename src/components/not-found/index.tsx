import { Box, Typography } from "@material-ui/core";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { useDidMount } from "../../util/hooks/lifecycle";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { useStyles } from "./styles";

export const NotFound: FC = () => {
  const pageViewLog = usePageViewLog();
  const setPageTitle = useSetPageTitle();

  const { pathname } = useLocation();

  const classes = useStyles();

  useDidMount(() => {
    setPageTitle("Page Not Found");
    pageViewLog("Not Found");
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      padding={3}
      className={classes.root}
    >
      <Box maxWidth={599}>
        <Box padding="1rem" borderBottom={1} borderColor="divider">
          <Typography variant="h2">:(</Typography>
        </Box>
        <Typography variant="body1" style={{ marginTop: 2, marginBottom: 2 }}>
          404 Page Not Found
        </Typography>
        <Typography variant="body1" style={{ marginTop: 2, marginBottom: 2 }}>
          リクエストされた URL {pathname} はこのサイトに存在しません
        </Typography>
        <Typography variant="body1" style={{ marginTop: 2, marginBottom: 2 }}>
          <Link to="/">トップページへ</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
