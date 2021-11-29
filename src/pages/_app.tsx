import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyles, { Theme } from "@/styles/globalStyles";
import { HtmlHead } from "@/components/head-document";

const AppEntry = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <HtmlHead />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default AppEntry;
