import { FC, useEffect } from "react";
import { useAuth, useSigninCheck } from "reactfire";

/**
 * アプリ内で常にサインインを要求
 */
export const AuthProvider: FC = () => {
  const auth = useAuth();

  const {
    status: signInCheckStatus,
    data: signInCheckResult,
  } = useSigninCheck();

  useEffect(() => {
    if (signInCheckStatus === "success" && !signInCheckResult.signedIn) {
      // サインインしていない場合匿名認証
      auth.signInAnonymously();
    }
  }, [auth, signInCheckResult.signedIn, signInCheckStatus]);

  return null;
};
