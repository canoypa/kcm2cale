import { createElement, ReactElement } from "react";
import { GoogleLogo } from "../../../components/singin/logo/google";
import { TwitterLogo } from "../../../components/singin/logo/twitter";
import { EnumValues } from "../../../util/types";

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
