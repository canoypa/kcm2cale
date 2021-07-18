import { FC, useEffect } from "react";
import { useAuth } from "reactfire";
import useSWR from "swr";
import { UserStateKey } from "../../../hooks/firebase/useUser";

/**
 * アプリ内で常にサインインを要求
 */
export const AuthProvider: FC = () => {
  const auth = useAuth();
  const { mutate } = useSWR(UserStateKey, null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user === null) {
        // サインインしていない場合匿名認証
        auth.signInAnonymously();
      }

      mutate(user);
    });

    return () => unsubscribe();
  }, [auth, mutate]);

  return null;
};
