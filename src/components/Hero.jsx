import { Box, Typography, Button, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import ReinaPic from "../assets/Reina_Picture.png";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: { xs: 6, md: 8 },
        px: 8,
        minHeight: "auto",

        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
      }}
    >
      {/* LEFT SIDE — TEXT */}
      <Box sx={{ flex: 1.2 }}>
        <Typography variant="h6" sx={{ opacity: 0.9, mb: 1 }}>
          Hello, I’m <strong>Reina Tng</strong>
        </Typography>

        <Typography variant="h2" fontWeight={800} sx={{ mb: 2 }}>
          Turning Complex Problems into Clear, Scalable Solutions
        </Typography>

        <Typography
          variant="h6"
          sx={{ opacity: 0.9, mb: 4, color: "background.default" }}
        >
          Business Analysis • Product • Systems Thinking
        </Typography>

        {/* Social Icons */}
        {/* Social Icons */}
        <Box sx={{ display: "flex", gap: 2, mb: 5 }}>
          {[
            {
              icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
              url: "https://www.linkedin.com/in/reinatng/",
            },
            {
              icon: <GitHubIcon sx={{ fontSize: 32 }} />,
              url: "https://github.com/reinatigger",
            },
            {
              icon: <EmailIcon sx={{ fontSize: 32 }} />,
              url: "mailto:tngreina10@gmail.com",
            },
          ].map((item, i) => (
            <IconButton
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "white",
                transition: "0.25s",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)",
                  transform: "scale(1.15)",
                },
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            href="#projects"
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "primary.main",
              fontWeight: "bold",
              px: 4,
            }}
          >
            View Portfolio
          </Button>

          <Button
            href="#about"
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              px: 4,
            }}
          >
            About Me
          </Button>
        </Box>
      </Box>

      {/* RIGHT SIDE — FULL IMAGE */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={ReinaPic}
          alt="Reina"
          style={{
            width: "110%",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
}
