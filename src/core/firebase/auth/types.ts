import { EnumValues } from "../../../util/types";

export const ProviderId = {
  Google: "google.com",
  Twitter: "twitter.com",
};
export type ProviderIdValue = EnumValues<typeof ProviderId>;
