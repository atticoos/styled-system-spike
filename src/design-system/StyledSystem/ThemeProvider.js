import React from "react";
import { ThemeProvider } from "emotion-theming";
import defaultTheme from "./theme";

export default ({ theme = defaultTheme, ...props }) => (
  <ThemeProvider theme={theme} {...props} />
);
