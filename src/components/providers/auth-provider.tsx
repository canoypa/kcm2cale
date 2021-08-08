import { FC, useEffect } from "react";
import { firebase } from "../../core/firebase/app";
import { useUser } from "../../hooks/firebase/auth/useUser";
import { useAuth } from "../../store/firebase/sdk";

/**
 * アプリ内で常にサインインを要求
 */
export const AuthProvider: FC = () => {
  const authLoadable = useAuth();
  const { mutate } = useUser();

  useEffect(() => {
    let unsubscribe: firebase.Unsubscribe | undefined = undefined;

    const update = (user: firebase.User | null) => {
      // サインインしていない場合匿名認証
      if (user === null) {
        authLoadable.contents.signInAnonymously();
      }

      // 状態更新
      mutate(user);
    };

    if (authLoadable.state === "hasValue") {
      unsubscribe = authLoadable.contents.onAuthStateChanged(update);
    }

    return () => unsubscribe?.();
  }, [authLoadable, mutate]);

  return null;
};
