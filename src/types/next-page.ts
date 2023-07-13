import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type ExtendedNextPage<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  /** 特定のページ間で共通のレイアウトを定義する */
  getShearedLayout: (page: ReactElement) => ReactNode;
};
