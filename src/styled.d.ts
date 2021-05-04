import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      coolBlue: string;
      primary: string;
      rasinBlack: string;
      smokedWhite: string;
      white: string;
    };
    fonts: {
      primaryFont: string;
    };
    mediaPx: {
      tabLand: number;
      tabPort: number;
      phone: number;
    };
  }
}
