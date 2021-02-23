import { createElement, ReactElement } from "react";
import { EnumValues } from "../../util/types";
import { GoogleLogo } from "./logo/google";
import { TwitterLogo } from "./logo/twitter";

export const ProviderId = {
  Google: "google",
  Twitter: "twitter",
} as const;
export type ProviderIdValue = EnumValues<typeof ProviderId>;

export const ProviderNameMap: ReadonlyMap<ProviderIdValue, string> = new Map([
  [ProviderId.Google, "Google"],
  [ProviderId.Twitter, "Twitter"],
]);

export const ProviderLogoMap: ReadonlyMap<
  ProviderIdValue,
  ReactElement
> = new Map([
  [ProviderId.Google, createElement(GoogleLogo)],
  [ProviderId.Twitter, createElement(TwitterLogo)],
]);
