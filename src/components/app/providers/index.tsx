import { FC, StrictMode, Suspense } from "react";
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
              {/* Fixme: AuthProvider によるサスペンド LCPが低下するため */}
              <Suspense fallback={null}>
                <AuthProvider />
                {children}
              </Suspense>
            </GlobalStyles>
          </ThemeProvider>
        </Router>
      </SWRConfig>
    </RecoilRoot>
  </StrictMode>
);
