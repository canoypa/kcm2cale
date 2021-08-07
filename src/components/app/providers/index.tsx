import { FC, StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "./auth-provider";
import { GlobalStyles } from "./global-styles";
import { SWRConfig } from "./swrConfig";
import { ThemeProvider } from "./theme-provider";

export const RootProviders: FC = ({ children }) => (
  <StrictMode>
    <RecoilRoot>
      <SWRConfig>
        <Router>
          <ThemeProvider>
            <GlobalStyles>
              <AuthProvider />
              {children}
            </GlobalStyles>
          </ThemeProvider>
        </Router>
      </SWRConfig>
    </RecoilRoot>
  </StrictMode>
);
