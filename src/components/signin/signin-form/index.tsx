import { Box, Typography } from "@material-ui/core";
import { FC } from "react";
import { useAuth } from "reactfire";
import { createProvider } from "../../../core/firebase/auth";
import { ProviderId, ProviderIdValue } from "../../../core/firebase/auth/types";
import { SignInButton } from "../signin-button";
import { useStyles } from "./styles";

export const SignInForm: FC = () => {
  const auth = useAuth();

  const classes = useStyles();

  const signIn = (providerId: ProviderIdValue) => {
    const provider = createProvider(providerId);
    auth.signInWithRedirect(provider);
  };

  return (
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
  );
};
