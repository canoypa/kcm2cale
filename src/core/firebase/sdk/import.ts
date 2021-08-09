import { FirebaseSdkName } from "./types";

export const importFirebaseSdk = (sdk: FirebaseSdkName) => {
  switch (sdk) {
    case "analytics":
      return import("firebase/compat/analytics");
    case "appCheck":
      return import("firebase/compat/app-check");
    case "auth":
      return import("firebase/compat/auth");
    case "database":
      return import("firebase/compat/database");
    case "firestore":
      return import("firebase/compat/firestore");
    case "functions":
      return import("firebase/compat/functions");
    case "messaging":
      return import("firebase/compat/messaging");
    case "performance":
      return import("firebase/compat/performance");
    case "remoteConfig":
      return import("firebase/compat/remote-config");
    case "storage":
      return import("firebase/compat/storage");
  }
};
