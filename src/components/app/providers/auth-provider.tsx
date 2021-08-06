import { FC, useEffect } from "react";
import { useUser } from "../../../hooks/firebase/auth/useUser";
import { useAuth } from "../../../store/firebase/sdk";

/**
 * アプリ内で常にサインインを要求
 */
export const AuthProvider: FC = () => {
  const auth = useAuth();
  const { mutate } = useUser();

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
