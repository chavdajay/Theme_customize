import { createTheme } from "@mui/material/styles";

export const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#2e7d32" }, // ✅ Green
      secondary: { main: "#ed6c02" }, // ✅ Orange

      background: {
        default: mode === "light" ? "#e8f5e9" : "#121212", // light = greenish, dark = black
        paper: mode === "light" ? "#ffffff" : "#1e1e1e", // paper light/dark
      },
      text: {
        primary: mode === "light" ? "#1b5e20" : "#ef882eff", // light text = dark green, dark text = light green
        secondary: "#ed6c02", // Orange text secondary
      },
    },

    typography: {
      fontFamily: `"Poppins", "Roboto", sans-serif`,
    },
  });
