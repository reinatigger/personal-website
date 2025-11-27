import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5c3c2e", // coffee
      dark: "#4a3025",
      light: "#a07a6a",
    },
    background: {
      default: "#f5f0e1", // cream
      paper: "#ffffff",
    },
    text: {
      primary: "#2a1f1a",
      secondary: "#6d625c",
    },
  },

  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: "#5c3c2e",
          "&:hover": { backgroundColor: "#4a3025" },
        },
        outlinedPrimary: {
          borderColor: "#5c3c2e",
          color: "#5c3c2e",
          "&:hover": { borderColor: "#4a3025", color: "#4a3025" },
        },
      },
    },
  },
});

export default theme;
