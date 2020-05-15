import React from "react";
import {
  ThemeProvider as StyledComponentsProvider,
  createGlobalStyle,
} from "styled-components";
import RobotoRegular from "../public/fonts/Roboto-Regular.ttf";
import RobotoMedium from "../public/fonts/Roboto-Medium.ttf";

const theme = {
  colors: {
    purple: "#9808FF",
    green: "#02C45A",
    green2: "#00E96F",
    white: "#FFFFFF",
    white1: "#F7F7F7",
    white2: "#F2F2F2",
    black: "#000000",
    grey: "#787878",
    grey2: "#999999",
    grey3: "#00000080",
    red: "#EF4056",
  },
  fontSizes: {
    xsmall: "14px",
    small: "16px",
    medium: "24px",
    large: "56px",
  },
  lineHeights: {
    xsmall: "20px",
    small: "24px",
    medium: "32px",
    large: "56px",
  },
  fontFamilies: {
    regular: "Roboto Regular",
    medium: "Roboto Medium",
  },
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Roboto Regular";
    src: url(${RobotoRegular});
  }
  @font-face {
    font-family: "Roboto Medium";
    src: url(${RobotoMedium});
  }

  body {
    font-family: "Roboto Regular";
    letter-spacing: 0px;
    background-color: ${({ theme }) => theme.colors.white1};
    width: 100%;
    height: 100%;
  }
`;

export const ThemeProdider = ({ children }) => (
  <StyledComponentsProvider theme={theme}>
    {children}
    <GlobalStyle />
  </StyledComponentsProvider>
);

export default ThemeProdider;
