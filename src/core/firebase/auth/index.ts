import { GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { createElement, ReactElement } from "react";
import { GoogleLogo } from "../../../components/signin/logo/google";
import { TwitterLogo } from "../../../components/signin/logo/twitter";
import { ProviderId } from "./types";

export { ProviderId } from "./types";

export const ProviderNameMap: ReadonlyMap<ProviderId, string> = new Map([
  [ProviderId.GOOGLE, "Google"],
  [ProviderId.TWITTER, "Twitter"],
]);

export const ProviderLogoMap: ReadonlyMap<ProviderId, ReactElement> = new Map([
  [ProviderId.GOOGLE, createElement(GoogleLogo)],
  [ProviderId.TWITTER, createElement(TwitterLogo)],
]);

export const createProvider = (providerId: ProviderId) => {
  switch (providerId) {
    case ProviderId.GOOGLE:
      return new GoogleAuthProvider();
    case ProviderId.TWITTER:
      return new TwitterAuthProvider();

    default:
      throw new Error("Error: 不明なプロバイダ");
  }
};
