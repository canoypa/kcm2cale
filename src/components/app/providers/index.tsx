import { FC, StrictMode, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";
import { RecoilRoot } from "recoil";
import { firebaseApp } from "../../../core/firebase/app";
import { AuthProvider } from "./auth-provider";
import { GlobalStyles } from "./global-styles";
import { SWRConfig } from "./swrConfig";
import { ThemeProvider } from "./theme-provider";

export const RootProviders: FC = ({ children }) => (
  <StrictMode>
    <RecoilRoot>
      <SWRConfig>
        <FirebaseAppProvider firebaseApp={firebaseApp} suspense>
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
        </FirebaseAppProvider>
      </SWRConfig>
    </RecoilRoot>
  </StrictMode>
);
