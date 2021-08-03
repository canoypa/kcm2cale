import firebase from "firebase";
import { selector, useRecoilValue } from "recoil";
import { firebaseApp } from "../../core/firebase/app";
import { getFirebaseSdkPromise } from "../../core/firebase/sdk/fetch";

const AnalyticsSdkState = selector<firebase.analytics.Analytics>({
  key: "firebase_sdk_analytics",
  get: () => getFirebaseSdkPromise(firebaseApp, "analytics"),
  dangerouslyAllowMutability: true,
});

const AuthSdkState = selector<firebase.auth.Auth>({
  key: "firebase_sdk_auth",
  get: () => getFirebaseSdkPromise(firebaseApp, "auth"),
  dangerouslyAllowMutability: true,
});

const FirestoreSdkState = selector<firebase.firestore.Firestore>({
  key: "firebase_sdk_firestore",
  get: () => getFirebaseSdkPromise(firebaseApp, "firestore"),
  dangerouslyAllowMutability: true,
});

export const useAnalytics = () => useRecoilValue(AnalyticsSdkState);
export const useAuth = () => useRecoilValue(AuthSdkState);
export const useFirestore = () => useRecoilValue(FirestoreSdkState);
