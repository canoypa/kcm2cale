import { createElement, ReactElement } from "react";
import { GoogleLogo } from "../../../components/signin/logo/google";
import { TwitterLogo } from "../../../components/signin/logo/twitter";
import { firebase } from "../app";
import { ProviderId, ProviderIdValue } from "./types";

export * from "./types";

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

export const createProvider = (providerId: ProviderIdValue) => {
  switch (providerId) {
    case ProviderId.Google:
      return new firebase.auth.GoogleAuthProvider();
    case ProviderId.Twitter:
      return new firebase.auth.TwitterAuthProvider();

    default:
      throw new Error("Error: 不明なプロバイダ");
  }
};
