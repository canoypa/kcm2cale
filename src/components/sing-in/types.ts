import { createElement, ReactElement } from "react";
import { EnumValues } from "../../util/types";
import { GoogleLogo } from "./logo/google";
import { TwitterLogo } from "./logo/twitter";

export const Providers = {
  Google: "google",
  Twitter: "twitter",
} as const;
export type ProvidersValues = EnumValues<typeof Providers>;

export const PROVIDERS_NAME_MAP: ReadonlyMap<ProvidersValues, string> = new Map(
  [
    [Providers.Google, "Google"],
    [Providers.Twitter, "Twitter"],
  ]
);

export const PROVIDERS_LOGO_MAP: ReadonlyMap<
  ProvidersValues,
  ReactElement
> = new Map([
  [Providers.Google, createElement(GoogleLogo)],
  [Providers.Twitter, createElement(TwitterLogo)],
]);
