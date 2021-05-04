import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { Theme } from "./styles/globalStyles";

import App from "./components/app/App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
