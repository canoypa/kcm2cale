import { FC, ReactNode } from "react";
import { AuthCheck, useAuth } from "reactfire";

const SignInAnonymously: FC = () => {
  const auth = useAuth();

  // 匿名認証完了までサスペンドさせる
  throw Promise.resolve(auth.signInAnonymously());
};

type Props = {
  children: ReactNode;
};
/**
 * アプリ内で常にサインインを要求
 */
export const AuthProvider: FC<Props> = ({ children }) => {
  return <AuthCheck fallback={<SignInAnonymously />}>{children}</AuthCheck>;
};
