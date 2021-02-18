import { FC } from "react";
import {
  ProvidersValues,
  PROVIDERS_LOGO_MAP,
  PROVIDERS_NAME_MAP,
} from "../types";
import * as styles from "./styles";

type Props = {
  provider: ProvidersValues;
  onClick: (provider: ProvidersValues) => void;
};
export const SignInButton: FC<Props> = ({ provider, onClick }) => {
  const providerName = PROVIDERS_NAME_MAP.get(provider);
  const providerLogo = PROVIDERS_LOGO_MAP.get(provider);

  const handlerClick = () => onClick(provider);

  return (
    <button className={styles.container} onClick={handlerClick}>
      <div className={styles.providerIcon}>{providerLogo}</div>
      <div>{providerName} でサインイン</div>
    </button>
  );
};
