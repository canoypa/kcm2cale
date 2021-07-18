import { useAuth } from "reactfire";
import useSWR from "swr";

export const UserStateKey = "firebase-auth-user";

export const useUser = () => {
  const auth = useAuth();

  return useSWR(UserStateKey, null, {
    initialData: auth.currentUser ?? undefined,
  });
};
