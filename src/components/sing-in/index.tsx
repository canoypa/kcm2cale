import { FC, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { createProvider, firebaseAuth } from "../../core/firebase/auth";
import { useUser } from "../../core/firebase/auth/hooks";
import { ProviderId, ProviderIdValue } from "../../core/firebase/auth/types";
import { SignInButton } from "./signin-button";
import * as styles from "./styles";

type LocationState =
  | {
      continue?: string;
    }
  | undefined;

export const SignIn: FC = () => {
  const { replace } = useHistory();
  const { state } = useLocation<LocationState>();
  const userLoadable = useUser();

  const signIn = (providerId: ProviderIdValue) => {
    const provider = createProvider(providerId);
    firebaseAuth().signInWithRedirect(provider);
  };

  useEffect(() => {
    if (userLoadable.state === "hasValue" && userLoadable.contents !== null) {
      replace(state?.continue ?? "/");
    }
  });

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
