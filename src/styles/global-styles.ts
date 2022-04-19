import { DefaultTheme, createGlobalStyle } from "styled-components";

export const Theme: DefaultTheme = {
  colors: {
    black: "#121212",
    coolBlue: "#2e364a",
    primary: "#dd457c",
    rasinBlack: "#181b25",
    smokedWhite: "rgba(255, 255, 255, 0.65)",
    white: "rgba(255, 255, 255, 1)",
  },
  fonts: {
    primaryFont: "source-han-sans-simplified-c, sans-serif",
  },
  mediaPx: {
    tabLand: 1200,
    tabPort: 1050,
    phone: 600,
  },
};

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

::selection {
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: #fff;
}

html {
  background-color: #11131a;
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  box-sizing: border-box;
  font-family: ${({ theme: { fonts } }) => fonts.primaryFont};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  overflow-x: hidden;
}

a,
a:link,
a:visited,
a:focus,
a:hover,
a:active {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

button {
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: ${({ theme: { fonts } }) => fonts.primaryFont};
  font-size: 1.4rem;
  text-transform: capitalize;
  text-align: center;
  transition: all 0.25s ease-in-out;
}

ul {
  list-style: none;
  margin-bottom: 0;
}

.aria-invisible {
  border: 0; 
  clip: rect(0 0 0 0); 
  height: 1px;  
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.f {
  display: flex;
}

.f-column {
  display: flex;
  flex-direction: column;
}

.f-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.f-column-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.f-align {
  display: flex;
  align-items: center;
}

.f-column-align {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;

export default GlobalStyles;
