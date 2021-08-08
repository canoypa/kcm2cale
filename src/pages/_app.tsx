import { NextPage } from "next";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "../components/providers/auth-provider";
import { GlobalStyles } from "../components/providers/global-styles";
import { SWRConfig } from "../components/providers/swrConfig";
import { ThemeProvider } from "../components/providers/theme-provider";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <RecoilRoot>
        <SWRConfig>
          <ThemeProvider>
            <GlobalStyles>
              <AuthProvider />
              <Component {...pageProps} />
            </GlobalStyles>
          </ThemeProvider>
        </SWRConfig>
      </RecoilRoot>
    </>
  );
};
export default App;
