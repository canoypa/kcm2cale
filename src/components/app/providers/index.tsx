import { FC, StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";

export const RootProviders: FC = ({ children }) => (
  <StrictMode>
    <RecoilRoot>
      <Router>{children}</Router>
    </RecoilRoot>
  </StrictMode>
);
