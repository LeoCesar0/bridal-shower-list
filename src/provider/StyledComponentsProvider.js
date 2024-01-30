"use client";

import { GlobalStyles } from "@/styles/global";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export const StyledComponentsProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {children}
    </ThemeProvider>
  );
};
