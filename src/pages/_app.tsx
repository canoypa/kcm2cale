import createEmotionCache, { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { PageLoadProgress } from "~/components/PageLoadProgress";
import { ThemeProvider } from "../components/providers/theme-provider";

const AuthProvider = dynamic(
  () => import("~/components/providers/auth-provider")
);

const clientSideEmotionCache = createEmotionCache({ key: "css" });

type Props = AppProps & {
  emotionCache?: EmotionCache;
};
const App: NextPage<Props> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  return (
    <>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <CacheProvider value={emotionCache}>
        <ThemeProvider>
          {/* <CssBaseline /> */}
          <AuthProvider />

          <PageLoadProgress />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};
export default App;
