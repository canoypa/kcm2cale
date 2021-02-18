import firebase from "firebase/app";
import { selector, useRecoilValueLoadable } from "recoil";
import { firebaseAuth } from ".";

const getUser = () =>
  new Promise<firebase.User | null>((resolve, reject) => {
    firebaseAuth().onAuthStateChanged(
      (user) => {
        resolve(user);
      },
      (error) => {
        reject(error);
      }
    );
  });

const FirebaseUser = selector<firebase.User | null>({
  key: "FirebaseUser",
  get: async () => await getUser(),
  dangerouslyAllowMutability: true,
});

export const useUser = () => useRecoilValueLoadable(FirebaseUser);
