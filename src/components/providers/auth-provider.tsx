import {
  onAuthStateChanged,
  signInAnonymously,
  Unsubscribe,
  User,
} from "firebase/auth";
import { FC, useEffect } from "react";
import { getAuth } from "../../core/firebase/sdk/auth";
import { useUser } from "../../hooks/firebase/auth/useUser";

/**
 * アプリ内で常にサインインを要求
 */
const AuthProvider: FC = () => {
  const auth = getAuth();
  const { mutate } = useUser();

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined = undefined;

    const update = (user: User | null) => {
      // サインインしていない場合匿名認証
      if (user === null) signInAnonymously(auth);

      // 状態更新
      mutate(user);
    };

    unsubscribe = onAuthStateChanged(auth, update);

    return () => unsubscribe?.();
  }, [auth, mutate]);

  return null;
};
export default AuthProvider;
