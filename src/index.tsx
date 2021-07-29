import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { Theme } from "./styles/globalStyles";

import App from "./components/app/App";
import projects from "./data/projects";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <App projects={projects} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
