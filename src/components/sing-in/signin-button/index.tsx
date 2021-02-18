import { FC } from "react";
import { ProviderIdValue, ProviderLogoMap, ProviderNameMap } from "../types";
import * as styles from "./styles";

type Props = {
  provider: ProviderIdValue;
  onClick: (provider: ProviderIdValue) => void;
};
export const SignInButton: FC<Props> = ({ provider, onClick }) => {
  const providerName = ProviderNameMap.get(provider);
  const providerLogo = ProviderLogoMap.get(provider);

  const handlerClick = () => onClick(provider);

  return (
    <button className={styles.container} onClick={handlerClick}>
      <div className={styles.providerIcon}>{providerLogo}</div>
      <div>{providerName} でサインイン</div>
    </button>
  );
};
