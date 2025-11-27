import { Box, Container, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#111827", color: "white", py: 8 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography variant="body2" sx={{ color: "gray.400" }}>
          © 2025 Reina Tng. All rights reserved.
        </Typography>

        {/* Social */}
        <Box>
          <IconButton sx={{ color: "gray.400", ":hover": { color: "#2563eb" } }}>
            <LinkedInIcon />
          </IconButton>

          <IconButton sx={{ color: "gray.400", ":hover": { color: "#2563eb" } }}>
            <GitHubIcon />
          </IconButton>

          <IconButton sx={{ color: "gray.400", ":hover": { color: "#2563eb" } }}>
            <MailIcon />
          </IconButton>
        </Box>

        <IconButton href="#hero" sx={{ color: "gray.400", ":hover": { color: "#2563eb" } }}>
          <KeyboardArrowUpIcon />
        </IconButton>
      </Container>
    </Box>
  );
}
``