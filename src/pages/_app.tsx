import { ThemeProvider } from "styled-components";

import GlobalStyles, { Theme } from "@/styles/global-styles";
import { HtmlHead } from "@/components/common/head-document";

import type { AppPropsWithLayout } from "@/types/index";

const AppEntry = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <HtmlHead />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
};

export default AppEntry;
