import { Box, Container, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",  // ⭐ uses theme instead of fixed color
        color: "white",
        py: 8,
      }}
    >
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
        <Typography variant="body2" sx={{ color: "grey.300" }}>
          © 2025 Reina Tng. All rights reserved.
        </Typography>

        {/* Social */}
        <Box>
          {[
            { icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/reinatng/" },
            { icon: <GitHubIcon />, url: "https://github.com/reinatigger" },
            { icon: <MailIcon />, url: "mailto:tngreina10@gmail.com" },
          ].map((item, i) => (
            <IconButton
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "grey.300",
                transition: "0.2s",
                ":hover": { color: "primary.light" }, // ⭐ hover contrasts nicely on primary.dark
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>

        {/* Back to top */}
        <IconButton
          href="#hero"
          sx={{
            color: "grey.300",
            transition: "0.2s",
            ":hover": { color: "primary.light" },
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Container>
    </Box>
  );
}
