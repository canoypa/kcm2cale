import { Button } from "@material-ui/core";
import { FC } from "react";
import {
  ProviderIdValue,
  ProviderLogoMap,
  ProviderNameMap,
} from "../../../core/firebase/auth";

type Props = {
  provider: ProviderIdValue;
  onClick: (provider: ProviderIdValue) => void;
};
export const SignInButton: FC<Props> = ({ provider, onClick }) => {
  const providerName = ProviderNameMap.get(provider);
  const ProviderLogo = ProviderLogoMap.get(provider);

  const handlerClick = () => onClick(provider);

  return (
    <Button
      variant="outlined"
      size="large"
      startIcon={ProviderLogo}
      onClick={handlerClick}
    >
      {providerName} でサインイン
    </Button>
  );
};
