import { FC } from "react";
import { ProviderId, ProviderIdValue } from "../../core/firebase/auth/types";
import { SignInButton } from "./signin-button";
import * as styles from "./styles";

export const SignIn: FC = () => {
  const signIn = (provider: ProviderIdValue) => {};

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
