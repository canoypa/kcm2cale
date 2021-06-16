import { FC } from "react";
import { Redirect, useLocation } from "react-router";
import { AuthCheck } from "reactfire";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
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

  const { state } = useLocation<LocationState>();

  useDidMount(() => {
    setPageTitle("サインイン");
    pageViewLog("Sign In");
  });

  return (
    <AuthCheck fallback={<SignInForm />}>
      <Redirect to={state?.continue ?? "/"} />
    </AuthCheck>
  );
};

export default SignIn;
