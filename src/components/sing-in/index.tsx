import { Box, Typography } from "@material-ui/core";
import { FC, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { createProvider, firebaseAuth } from "../../core/firebase/auth";
import { useUser } from "../../core/firebase/auth/hooks";
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

  const { replace } = useHistory();
  const { state } = useLocation<LocationState>();

  const userLoadable = useUser();

  const classes = useStyles();

  const signIn = (providerId: ProviderIdValue) => {
    const provider = createProvider(providerId);
    firebaseAuth().signInWithRedirect(provider);
  };

  useEffect(() => {
    if (userLoadable.state === "hasValue" && userLoadable.contents !== null) {
      replace(state?.continue ?? "/");
    }
  }, [replace, state?.continue, userLoadable.contents, userLoadable.state]);

  useDidMount(() => {
    setPageTitle("サインイン");
    pageViewLog("Sign In");
  });

  return (
    <>
      {userLoadable.state === "loading" ? (
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
