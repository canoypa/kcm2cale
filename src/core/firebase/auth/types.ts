import { EnumValues } from "../../../util/types";
import { firebase } from "../app";

export const ProviderId = {
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  Twitter: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
};
export type ProviderIdValue = EnumValues<typeof ProviderId>;
