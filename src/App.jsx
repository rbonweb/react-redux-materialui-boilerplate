import { ThemeProvider } from "@emotion/react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import * as React from "react";
import Routes from "./routes";
import theme from "./theme";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
