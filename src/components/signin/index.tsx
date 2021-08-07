import { FC } from "react";
import { Redirect, useLocation } from "react-router";
import { useUser } from "../../hooks/firebase/auth/useUser";
import { useDidMount } from "../../util/hooks/lifecycle";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { SignInForm } from "./signin-form";

type LocationState =
  | {
      continue?: string;
    }
  | undefined;

export const SignIn: FC = () => {
  const setPageTitle = useSetPageTitle();

  const { data: user } = useUser();

  const { state } = useLocation<LocationState>();

  useDidMount(() => {
    setPageTitle("サインイン");
  });

  if (!user) {
    return <></>;
  }

  return user.isAnonymous ? (
    <SignInForm anonymousUser={user} />
  ) : (
    <Redirect to={state?.continue ?? "/"} />
  );
};

export default SignIn;
