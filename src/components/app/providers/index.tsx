import { FC, StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { GlobalStyles } from "./global-styles";
import { ThemeProvider } from "./theme-provider";

export const RootProviders: FC = ({ children }) => (
  <StrictMode>
    <RecoilRoot>
      <Router>
        <ThemeProvider>
          <GlobalStyles>{children}</GlobalStyles>
        </ThemeProvider>
      </Router>
    </RecoilRoot>
  </StrictMode>
);
