import { NextPage } from "next";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { GlobalStyles } from "../components/providers/global-styles";
import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from "../components/providers/theme-provider";

declare module "@material-ui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const AuthProvider = dynamic(
  () => import("~/components/providers/auth-provider")
);

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <GlobalStyles>
            <AuthProvider />
            <Component {...pageProps} />
          </GlobalStyles>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};
export default App;
