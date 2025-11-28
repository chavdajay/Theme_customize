import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";
import Paper from "@mui/material/Paper";

export default function Header({ title, mode, onModeChange, onMenuToggle }) {
  return (
    <AppBar position="static" color="text.primary" elevation={1}>
      <Toolbar>
        <IconButton edge="start" onClick={onMenuToggle} sx={{ mr: 1 }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>

        <Paper
          component="form"
          sx={{
            p: "2px 8px",
            display: "flex",
            alignItems: "center",
            width: 300,
            mr: 2,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
        </Paper>

        {/*  notifications */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton aria-label="show notifications">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton
            sx={{ ml: 1 }}
            onClick={() => onModeChange(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
