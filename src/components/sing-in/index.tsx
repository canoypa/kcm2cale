import { FC } from "react";
import { SignInButton } from "./signin-button";
import * as styles from "./styles";
import { Providers, ProvidersValues } from "./types";

export const SignIn: FC = () => {
  const signIn = (provider: ProvidersValues) => {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <div className={styles.title}>サインイン</div>
        </div>
        <div className={styles.signInButtons}>
          <SignInButton provider={Providers.Google} onClick={signIn} />
          <SignInButton provider={Providers.Twitter} onClick={signIn} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
