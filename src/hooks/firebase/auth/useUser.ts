import useSWR from "swr";
import { firebase } from "../../../core/firebase/app";
import { useAuth } from "../../../store/firebase/sdk";

export const UserStateKey = "firebase-auth-user";

type UserState = firebase.User | null | undefined;

export const useUser = () => {
  const auth = useAuth();

  const initialData =
    (auth.state === "hasValue" && auth.contents.currentUser) || undefined;

  return useSWR<UserState>(UserStateKey, { initialData });
};
