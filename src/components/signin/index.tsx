import { Box, CircularProgress } from "@material-ui/core";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useUser } from "../../hooks/firebase/auth/useUser";
import { SignInForm } from "./signin-form";

/** リダイレクト先を返す */
const getRedirectTo = (to: string | string[] | undefined): string => {
  // continue が有効な値でなければ /
  return (typeof to === "string" && to) || "/";
};

export const SignIn: FC = () => {
  const { data: user } = useUser();
  const { query, replace } = useRouter();

  useEffect(() => {
    if (user && !user.isAnonymous) {
      const redirectTo = getRedirectTo(query.continue);
      replace(redirectTo);
    }
  }, [query.continue, replace, user]);

  return user?.isAnonymous ? (
    <SignInForm anonymousUser={user} />
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress size={24} />
    </Box>
  );
};
