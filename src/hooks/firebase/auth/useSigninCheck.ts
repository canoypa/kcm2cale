import { User } from "firebase/auth";
import { useUser } from "./useUser";

type SigninCheckResult =
  | {
      signedIn: true;
      user: User;
    }
  | {
      signedIn: false;
      user: null | undefined;
    };

export const useSigninCheck = () => {
  const { data: user } = useUser();

  const data = { signedIn: Boolean(user), user } as SigninCheckResult;

  return {
    data,
  };
};
