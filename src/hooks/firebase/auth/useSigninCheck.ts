import { firebase } from "../../../core/firebase/app";
import { useUser } from "../useUser";

type SigninCheckResult =
  | {
      signedIn: true;
      user: firebase.User;
    }
  | {
      signedIn: false;
      user: null | undefined;
    };

export const useSigninCheck = () => {
  const { data: user, isValidating } = useUser();

  const data = { signedIn: Boolean(user), user } as SigninCheckResult;

  return {
    data,
    isValidating,
  };
};
