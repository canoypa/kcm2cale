import { FC } from "react";
import { Redirect, useLocation } from "react-router";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { useUser } from "../../hooks/firebase/useUser";
import { useDidMount } from "../../util/hooks/lifecycle";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { SignInForm } from "./signin-form";

type LocationState =
  | {
      continue?: string;
    }
  | undefined;

export const SignIn: FC = () => {
  const pageViewLog = usePageViewLog();
  const setPageTitle = useSetPageTitle();

  const { data: user } = useUser();

  const { state } = useLocation<LocationState>();

  useDidMount(() => {
    setPageTitle("サインイン");
    pageViewLog("Sign In");
  });

  if (!user) {
    return <></>;
  }

  return user.isAnonymous ? (
    <SignInForm />
  ) : (
    <Redirect to={state?.continue ?? "/"} />
  );
};

export default SignIn;
