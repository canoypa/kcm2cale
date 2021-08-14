import { getAuth, User } from "firebase/auth";
import useSWR from "swr";

export const UserStateKey = "firebase-auth-user";

type UserState = User | null | undefined;

export const useUser = () => {
  const auth = getAuth();

  const initialData = auth.currentUser || undefined;

  return useSWR<UserState>(UserStateKey, { initialData });
};
