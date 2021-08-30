import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "../components/providers/auth-provider";
import { GlobalStyles } from "../components/providers/global-styles";
import { ThemeProvider } from "../components/providers/theme-provider";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <RecoilRoot>
        <ThemeProvider>
          <GlobalStyles>
            <AuthProvider />
            <Component {...pageProps} />
          </GlobalStyles>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};
export default App;
