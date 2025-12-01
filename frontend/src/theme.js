import { createTheme } from "@mui/material/styles";

export const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#7db6eeff" }, // ✅ Green
      secondary: { main: "#ed6c02" }, // ✅ Orange

      background: {
        default: mode === "light" ? "#bfddefff" : "#121212", // light = greenish, dark = black
        paper: mode === "light" ? "#ffffffff" : "#1e1e1e", // paper light/dark
      },
      text: {
        primary: mode === "light" ? "#121412ff" : "#ef882eff", // light text = dark green, dark text = light green
        secondary: "#ed6c02", // Orange text secondary
      },
    },

    typography: {
      fontFamily: `"Poppins", "Roboto", sans-serif`,
    },
  });
