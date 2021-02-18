import { FC } from "react";
import "./global.styles";
import { RootProviders } from "./providers";
import { RootRouter } from "./routers/root";

export const App: FC = () => (
  <RootProviders>
    <RootRouter />
  </RootProviders>
);
