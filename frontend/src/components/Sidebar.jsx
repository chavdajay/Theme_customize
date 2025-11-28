import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";

const drawerWidth = 240;

export default function Sidebar({ open = true, onToggle = () => {} }) {
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? drawerWidth : 72,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 72,
          boxSizing: "border-box",
          transition: "width 200ms",
          bgcolor: "background.paper",
          color: "text.primary",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "space-between" : "center",
          p: 1,
          bgcolor: "background.paper",
          color: "text.primary",
        }}
      >
        {open && <strong style={{ paddingLeft: 8 }}>Menu</strong>}
        <IconButton onClick={onToggle} size="small">
          {open ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Box>

      <Divider />

      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Home" />}
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Categories" />}
        </ListItem>
      </List>

      <Box sx={{ flex: 1 }} />

      <Divider />
      <Box sx={{ p: 1 }}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Settings" />}
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            {open && <ListItemText primary="About" />}
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FeedbackIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Feedback" />}
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
