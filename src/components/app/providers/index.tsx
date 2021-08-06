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
              {/* auth sdk のインポートでサスペンドするため必要 */}
              <Suspense fallback={null}>
                <AuthProvider />
              </Suspense>

              {children}
            </GlobalStyles>
          </ThemeProvider>
        </Router>
      </SWRConfig>
    </RecoilRoot>
  </StrictMode>
);
