import { FC, ReactNode } from "react";
import { SWRConfig as OriginalSWRConfig, SWRConfiguration } from "swr";

const SWRConfigObj: SWRConfiguration = {
  // useSWR で fetcher が未定義の場合 window.fetch を使用しない
  fetcher: undefined,
};

type Props = {
  children: ReactNode;
};
export const SWRConfig: FC<Props> = ({ children }) => {
  return <OriginalSWRConfig value={SWRConfigObj}>{children}</OriginalSWRConfig>;
};
