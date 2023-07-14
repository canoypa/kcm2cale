import createEmotionCache, { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { PageLoadProgress } from "~/components/PageLoadProgress";
import { ExtendedNextPage } from "~/types/next-page";
import { ThemeProvider } from "../components/providers/theme-provider";

const clientSideEmotionCache = createEmotionCache({
  key: "css",
  prepend: true,
});

type Props = AppProps & {
  emotionCache?: EmotionCache;
  Component: ExtendedNextPage;
};
const App: NextPage<Props> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  const getSharedLayout = Component.getShearedLayout || ((page) => page);

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

          <PageLoadProgress />
          {getSharedLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};
export default App;
