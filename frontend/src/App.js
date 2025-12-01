import React, { useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "./theme";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import DashboardPage from "./pages/DashboardPage";
import Box from "@mui/material/Box";
import { LanguageProvider } from "./context/LanguageContext"; // lagauge

export default function App() {
  const [mode, setMode] = useState("light");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    // lagauge
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            width: "100%",
            bgcolor: "background.default", // 🔥 dark/light hisaabe background
            color: "text.primary", // 🔥 dark/light hisaabe text
          }}
        >
          <Sidebar
            open={sidebarOpen}
            onToggle={() => setSidebarOpen((s) => !s)}
          />

          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Header
              title="Dashboard"
              mode={mode}
              onModeChange={(m) => setMode(m)}
              onMenuToggle={() => setSidebarOpen((s) => !s)}
            />
            <main className="main-content">
              <DashboardPage />
            </main>
          </Box>
        </Box>
      </ThemeProvider>
    </LanguageProvider>
  );
}
