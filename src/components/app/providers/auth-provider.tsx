import { FC, useEffect } from "react";
import { useAuth } from "../../../store/firebase/sdk";

/**
 * アプリ内で常にサインインを要求
 */
export const AuthProvider: FC = () => {
  const auth = useAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user === null) {
        // サインインしていない場合匿名認証
        auth.signInAnonymously();
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return null;
};
