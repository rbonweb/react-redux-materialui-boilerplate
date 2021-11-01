import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#90caf9",
      dark: "#42a5f5",
      light: "#e3f2fd",
    },
    secondary: {
      main: "#ce93d8",
      dark: "#ab47bc",
      light: "#f3e5f5",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
    },
    warning: {
      light: "#ffb74d",
      main: "#ffa726",
      dark: "#f57c00",
    },
    info: {
      light: "#4fc3f7",
      main: "#29b6f6",
      dark: "#0288d1",
    },
    success: {
      light: "#81c784",
      main: "#66bb6a",
      dark: "#388e3c",
    },
    divider: "#d3d3d3",
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: 38,
    },
    h2: {
      fontSize: 34,
    },
    h3: {
      fontSize: 22,
      lineHeight: 1,
    },
    h4: {
      fontSize: 22,
      fontWeight: "normal",
      lineHeight: 1,
    },
    h5: {
      fontSize: 18,
      lineHeight: 1,
    },
    h6: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 12,
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          padding: 0,
          "& .MuiOutlinedInput-input": {
            padding: "10px 15px",
          },
        },
      },
    },
  },
});
export default theme;
