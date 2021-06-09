import { Box, Typography } from "@material-ui/core";
import { FC, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { useAuth, useUser } from "reactfire";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { createProvider } from "../../core/firebase/auth";
import { ProviderId, ProviderIdValue } from "../../core/firebase/auth/types";
import { useDidMount } from "../../util/hooks/lifecycle";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { SignInButton } from "./signin-button";
import { useStyles } from "./styles";

type LocationState =
  | {
      continue?: string;
    }
  | undefined;

export const SignIn: FC = () => {
  const pageViewLog = usePageViewLog();
  const setPageTitle = useSetPageTitle();

  const auth = useAuth();

  const { replace } = useHistory();
  const { state } = useLocation<LocationState>();

  const { status: authStatus, data: user } = useUser();

  const classes = useStyles();

  const signIn = (providerId: ProviderIdValue) => {
    const provider = createProvider(providerId);
    auth.signInWithRedirect(provider);
  };

  useEffect(() => {
    if (authStatus === "success" && user !== null) {
      replace(state?.continue ?? "/");
    }
  }, [replace, state?.continue, user, authStatus]);

  useDidMount(() => {
    setPageTitle("サインイン");
    pageViewLog("Sign In");
  });

  return (
    <>
      {authStatus === "loading" ? (
        <div>Loading...</div>
      ) : (
        <div className={classes.root}>
          <div className={classes.container}>
            <Box display="flex" justifyContent="center">
              <Typography variant="h4">サインイン</Typography>
            </Box>
            <div className={classes.actions}>
              <SignInButton provider={ProviderId.Google} onClick={signIn} />
              <SignInButton provider={ProviderId.Twitter} onClick={signIn} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
