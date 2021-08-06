import { firebase } from "../app";
import { importFirebaseSdk } from "./import";

type Args<Sdk> = {
  firebaseApp: firebase.app.App;
  setup?: (sdk: () => Sdk) => void;
};

export const preloadAnalytics = async ({
  firebaseApp,
  setup,
}: Args<firebase.analytics.Analytics>) => {
  await importFirebaseSdk("analytics");

  setup?.(firebaseApp.analytics.bind(firebaseApp));
};

export const preloadAuth = async ({
  firebaseApp,
  setup,
}: Args<firebase.auth.Auth>) => {
  await importFirebaseSdk("auth");

  setup?.(firebaseApp.auth.bind(firebaseApp));
};

export const preloadFirestore = async ({
  firebaseApp,
  setup,
}: Args<firebase.firestore.Firestore>) => {
  await importFirebaseSdk("firestore");

  setup?.(firebaseApp.firestore.bind(firebaseApp));
};
