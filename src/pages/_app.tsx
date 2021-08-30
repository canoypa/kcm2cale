import { CssBaseline } from "@material-ui/core";
import { NextPage } from "next";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ThemeProvider } from "../components/providers/theme-provider";

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

      <ThemeProvider>
        <CssBaseline />
        <AuthProvider />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};
export default App;
