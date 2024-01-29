"use client"

import { THEME } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export const StyledComponentsProvider = ({ children }) => {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};
