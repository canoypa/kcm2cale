import { FC } from "react";
import { RootProviders } from "./providers";
import { RootRouter } from "./routers/root";

export const App: FC = () => (
  <RootProviders>
    <RootRouter />
  </RootProviders>
);
