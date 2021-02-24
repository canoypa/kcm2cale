import { FC } from "react";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { SignInButton } from "./signin-button";
import * as styles from "./styles";
import { ProviderId, ProviderIdValue } from "./types";

export const SignIn: FC = () => {
  const setPageTitle = useSetPageTitle();

  const signIn = (provider: ProviderIdValue) => {};

  setPageTitle("サインイン");

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <div className={styles.title}>サインイン</div>
        </div>
        <div className={styles.signInButtons}>
          <SignInButton provider={ProviderId.Google} onClick={signIn} />
          <SignInButton provider={ProviderId.Twitter} onClick={signIn} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
