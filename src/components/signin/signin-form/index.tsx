import { Box, Typography, useTheme } from "@mui/material";
import {
  getRedirectResult,
  linkWithRedirect,
  signInWithCredential,
  User,
} from "firebase/auth";
import { FC } from "react";
import { createProvider } from "../../../core/firebase/auth";
import { ProviderId } from "../../../core/firebase/auth/types";
import { getAuth } from "../../../core/firebase/sdk/auth";
import { useDidMount } from "../../../util/hooks/lifecycle";
import { SignInButton } from "../signin-button";

type Props = {
  anonymousUser: User;
};
export const SignInForm: FC<Props> = ({ anonymousUser }) => {
  const auth = getAuth();

  const theme = useTheme();

  const signIn = (providerId: ProviderId) => {
    const provider = createProvider(providerId);
    linkWithRedirect(anonymousUser, provider);
  };

  useDidMount(() => {
    getRedirectResult(auth)
      .then((result) => {
        // 正常にリンク完了
        console.log(result);
      })
      .catch(async (error) => {
        // すでに作成済みのアカウントの場合はそちらでサインインする
        if (error.code === "auth/credential-already-in-use") {
          // Todo: 匿名認証時に作成された編成がある場合移行するか尋ねる？

          // 現在のユーザを変数に逃がす
          const prevUser = anonymousUser;

          // 認証情報でサインイン
          await signInWithCredential(auth, error.credential);

          // 匿名ユーザを削除
          prevUser.delete();

          return;
        }

        throw error;
      });
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        rowGap={7}
        width="100%"
        padding={3}
        sx={{
          [theme.breakpoints.up("sm")]: {
            border: "1px solid",
            borderColor: theme.palette.divider,
            padding: 4,
            borderRadius: 1,
            maxWidth: 480,
            boxSizing: "border-box",
          },
        }}
      >
        <Box display="flex" justifyContent="center">
          <Typography variant="h4">サインイン</Typography>
        </Box>
        <Box display="flex" flexDirection="column" rowGap={2}>
          <SignInButton provider={ProviderId.GOOGLE} onClick={signIn} />
          <SignInButton provider={ProviderId.TWITTER} onClick={signIn} />
        </Box>
      </Box>
    </Box>
  );
};
