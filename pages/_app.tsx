import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#ffc400",
        dark: "#b98f00",
        light: "#ffd246",
        contrastText: "rgb(10, 10, 10)",
      },
      background: {
        default: "rgb(10, 10, 10)",
        paper: "#0e0e0e",
      },
      text: {
        disabled: "#414141",
        primary: "#ffffff",
        secondary: "rgb(255, 196, 0)",
      },
      error: {
        main: "#d63e30",
        light: "#ff695a",
        dark: "#852c21",
        contrastText: "rgba(72,15,12,0.87)",
      },
      warning: {
        main: "#ffe300",
        light: "#ffea46",
        dark: "#bda600",
      },
      success: {
        main: "#26d25a",
      },
      secondary: {
        main: "#ffffff",
        light: "#ffffff",
        dark: "#c9c9c9",
      },
      info: {
        main: "#00c9ff",
      },
      divider: "rgba(255,196,0,0.4)",
    },
  });
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>;
}

export default MyApp;
