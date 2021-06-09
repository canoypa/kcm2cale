import { FC, StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";
import { RecoilRoot } from "recoil";
import { firebaseApp } from "../../../core/firebase/app";
import { GlobalStyles } from "./global-styles";
import { ThemeProvider } from "./theme-provider";

export const RootProviders: FC = ({ children }) => (
  <StrictMode>
    <RecoilRoot>
      <FirebaseAppProvider firebaseApp={firebaseApp} suspense>
        <Router>
          <ThemeProvider>
            <GlobalStyles>{children}</GlobalStyles>
          </ThemeProvider>
        </Router>
      </FirebaseAppProvider>
    </RecoilRoot>
  </StrictMode>
);
