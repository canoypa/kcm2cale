import { ProviderId as AuthProviderId } from "firebase/auth";

export const ProviderId = AuthProviderId;
export type ProviderId = typeof ProviderId[keyof typeof ProviderId];
