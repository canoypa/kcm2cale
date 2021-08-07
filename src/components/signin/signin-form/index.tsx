import { Box, Typography } from "@material-ui/core";
import { FC } from "react";
import { firebase } from "../../../core/firebase/app";
import { createProvider } from "../../../core/firebase/auth";
import { ProviderId, ProviderIdValue } from "../../../core/firebase/auth/types";
import { useAuth } from "../../../store/firebase/sdk";
import { useDidMount } from "../../../util/hooks/lifecycle";
import { SignInButton } from "../signin-button";
import { useStyles } from "./styles";

type Props = {
  anonymousUser: firebase.User;
};
export const SignInForm: FC<Props> = ({ anonymousUser }) => {
  const authLoadable = useAuth();

  if (authLoadable.state === "hasValue") {
    return (
      <SignInFormScreen
        auth={authLoadable.contents}
        anonymousUser={anonymousUser}
      />
    );
  }

  return null;
};

type SignInFormScreenProps = Props & {
  auth: firebase.auth.Auth;
};
const SignInFormScreen: FC<SignInFormScreenProps> = ({
  auth,
  anonymousUser: user,
}) => {
  const classes = useStyles();

  const signIn = (providerId: ProviderIdValue) => {
    const provider = createProvider(providerId);
    user.linkWithRedirect(provider);
  };

  useDidMount(() => {
    auth
      .getRedirectResult()
      .then((result) => {
        // 正常にリンク完了
        console.log(result);
      })
      .catch(async (error) => {
        // すでに作成済みのアカウントの場合はそちらでサインインする
        if (error.code === "auth/credential-already-in-use") {
          // Todo: 匿名認証時に作成された編成がある場合移行するか尋ねる？

          // 現在のユーザを変数に逃がす
          const prevUser = user;

          // 認証情報でサインイン
          await auth.signInWithCredential(error.credential);

          // 匿名ユーザを削除
          prevUser.delete();

          return;
        }

        throw error;
      });
  });

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
