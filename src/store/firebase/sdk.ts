import firebase from "firebase";
import { atom, useRecoilValue } from "recoil";
import { firebaseApp } from "../../core/firebase/app";
import { getFirebaseSdkPromise } from "../../core/firebase/sdk/fetch";

const AnalyticsSdkState = atom<firebase.analytics.Analytics>({
  key: "firebase_sdk_analytics",
  default: getFirebaseSdkPromise(firebaseApp, "analytics"),
  dangerouslyAllowMutability: true,
});

const AuthSdkState = atom<firebase.auth.Auth>({
  key: "firebase_sdk_auth",
  default: getFirebaseSdkPromise(firebaseApp, "auth"),
  dangerouslyAllowMutability: true,
});

const FirestoreSdkState = atom<firebase.firestore.Firestore>({
  key: "firebase_sdk_firestore",
  default: getFirebaseSdkPromise(firebaseApp, "firestore"),
  dangerouslyAllowMutability: true,
});

export const useAnalytics = () => useRecoilValue(AnalyticsSdkState);
export const useAuth = () => useRecoilValue(AuthSdkState);
export const useFirestore = () => useRecoilValue(FirestoreSdkState);
