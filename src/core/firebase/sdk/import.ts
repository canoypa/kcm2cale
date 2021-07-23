import { FirebaseSdkName } from "./types";

export const importFirebaseSdk = (sdk: FirebaseSdkName) => {
  switch (sdk) {
    case "analytics":
      return import("firebase/analytics");
    case "appCheck":
      return import("firebase/app-check");
    case "auth":
      return import("firebase/auth");
    case "database":
      return import("firebase/database");
    case "firestore":
      return import("firebase/firestore");
    case "functions":
      return import("firebase/functions");
    case "messaging":
      return import("firebase/messaging");
    case "performance":
      return import("firebase/performance");
    case "remoteConfig":
      return import("firebase/remote-config");
    case "storage":
      return import("firebase/storage");
  }
};
