import { firebase } from "../app";
import { importFirebaseSdk } from "./import";
import { FirebaseSdkName } from "./types";

type App = firebase.app.App;
type Sdk<T extends FirebaseSdkName> = ReturnType<App[T]>;

function getSdk(app: App, sdkName: "analytics"): Promise<Sdk<"analytics">>;
function getSdk(app: App, sdkName: "appCheck"): Promise<Sdk<"appCheck">>;
function getSdk(app: App, sdkName: "auth"): Promise<Sdk<"auth">>;
function getSdk(app: App, sdkName: "database"): Promise<Sdk<"database">>;
function getSdk(app: App, sdkName: "firestore"): Promise<Sdk<"firestore">>;
function getSdk(app: App, sdkName: "functions"): Promise<Sdk<"functions">>;
function getSdk(app: App, sdkName: "messaging"): Promise<Sdk<"messaging">>;
function getSdk(app: App, sdkName: "performance"): Promise<Sdk<"performance">>;
function getSdk(
  app: App,
  sdkName: "remoteConfig"
): Promise<Sdk<"remoteConfig">>;
function getSdk(app: App, sdkName: "storage"): Promise<Sdk<"storage">>;
async function getSdk(app: App, sdkName: FirebaseSdkName) {
  // インポート済みの場合返す
  // なぜか bind が必要
  const currentSdk = app[sdkName];
  if (currentSdk) return currentSdk.bind(app)();

  // インポート
  await importFirebaseSdk(sdkName);

  const sdk = app[sdkName].bind(app);
  return sdk();
}
export { getSdk as getFirebaseSdkPromise };
