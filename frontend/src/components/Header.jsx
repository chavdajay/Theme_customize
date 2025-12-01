import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu"; // ✅ Profile dropdown menu
import Avatar from "@mui/material/Avatar"; // ✅ User avatar

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";

import { useLang } from "../context/LanguageContext"; // language

export default function Header({ title, mode, onModeChange, onMenuToggle }) {
  const { lang, setLang, t } = useLang(); // language
  const [anchorEl, setAnchorEl] = useState(null); // ✅ Profile dropdown state

  // ✅ Open profile dropdown
  const handleOpenProfile = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // ✅ Close profile dropdown
  const handleCloseProfile = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        {/* Menu button */}
        <IconButton edge="start" onClick={onMenuToggle}>
          <MenuIcon />
        </IconButton>

        {/* Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {t("dashboard")} {/* language */}
        </Typography>

        {/* Search Box */}
        <Paper
          sx={{
            p: "2px 8px",
            display: "flex",
            alignItems: "center",
            width: 260,
            mr: 2,
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder={t("search")} />{" "}
          {/* language */}
        </Paper>

        {/* Language dropdown */}
        <Select
          size="small"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          sx={{ mr: 2, bgcolor: "white" }}
        >
          <MenuItem value="gu">🇮🇳 ગુજરાતી</MenuItem>
          <MenuItem value="hi">🇮🇳 हिन्दी</MenuItem>
          <MenuItem value="en">🇬🇧 English</MenuItem>
        </Select>

        {/* Notifications */}
        <IconButton>
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* Theme toggle */}
        <IconButton
          onClick={() => onModeChange(mode === "light" ? "dark" : "light")}
        >
          {mode === "light" ? <DarkMode /> : <LightMode />}
        </IconButton>

        {/* ✅ User Avatar / Profile */}
        <IconButton sx={{ ml: 2 }} onClick={handleOpenProfile}>
          <Avatar sx={{ width: 36, height: 36 }}>J</Avatar>{" "}
        </IconButton>

        {/* ✅ Profile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseProfile}
        >
          <MenuItem onClick={handleCloseProfile}>{t("my_profile")}</MenuItem>
          <MenuItem onClick={handleCloseProfile}>{t("settings")}</MenuItem>
          <MenuItem onClick={handleCloseProfile}>{t("logout")}</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
