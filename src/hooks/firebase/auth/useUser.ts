import { getAuth, User } from "firebase/auth";
import useSWR from "swr";

export const UserStateKey = "firebase-auth-user";

type UserState = User | null | undefined;

export const useUser = () => {
  const auth = getAuth();

  const fallbackData = auth.currentUser || undefined;

  return useSWR<UserState>(UserStateKey, { fallbackData });
};
