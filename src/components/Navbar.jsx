import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", link: "#about" },
    { label: "Passion", link: "#hobby" },
    { label: "Experiences", link: "#experiences" },
    { label: "Projects", link: "#projects" },
  ];

  const handleSmoothScroll = (selector) => {
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          backgroundColor: "background.paper",
          color: "primary.main",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.06)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold">
            Reina T.
          </Typography>

          {/* Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="primary"
                onClick={() => handleSmoothScroll(item.link)}
                sx={{
                  fontWeight: 500,
                  ":hover": { color: "primary.dark" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Button */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "block", md: "none" }, color: "primary.main" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 240, bgcolor: "background.default", pt: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.label}
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => handleSmoothScroll(item.link), 250);
                }}
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  ":hover": { bgcolor: "primary.light + 20" },
                }}
              >
                {item.label}
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
