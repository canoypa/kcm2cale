import useSWR from "swr";
import { useAuth } from "../../store/firebase/sdk";

export const UserStateKey = "firebase-auth-user";

export const useUser = () => {
  const auth = useAuth();

  return useSWR(UserStateKey, null, {
    initialData: auth.currentUser ?? undefined,
  });
};
