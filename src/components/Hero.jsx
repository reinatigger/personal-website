import { Box, Typography, Button, IconButton, Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import ReinaPic from "../assets/reina_photo.jpg";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: { xs: 12, md: 16 }, // balanced top + bottom
        px: { xs: 3, sm: 5, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 6, md: 10 },
      }}
    >
      {/* LEFT SIDE — TEXT */}
      <Box
        sx={{
          flex: 1,
          ml: { xs: 0, md: 10 }, // ⭐ pushes text slightly to the right
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h3"
          fontWeight={800}
          sx={{
            whiteSpace: "pre-line",
            mb: 2,
            fontSize: {
              xs: "2rem",
              sm: "2.4rem",
              md: "3rem",
              lg: "3.4rem",
            },
          }}
        >
          {`Hello,\nI'm Reina Tng`}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            opacity: 0.9,
            mb: 4,
            color: "background.default",
            fontSize: { xs: "1rem", sm: "1.1rem" },
          }}
        >
          Business Analysis • Product • Systems Thinking
        </Typography>

        {/* Social Icons */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 4,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {[
            {
              icon: <LinkedInIcon />,
              url: "https://www.linkedin.com/in/reinatng/",
            },
            { icon: <GitHubIcon />, url: "https://github.com/reinatigger" },
            { icon: <EmailIcon />, url: "mailto:tngreina10@gmail.com" },
          ].map((item, i) => (
            <IconButton
              key={i}
              href={item.url}
              target="_blank"
              sx={{
                color: "white",
                "& svg": { fontSize: "1.9rem" },
                transition: "0.25s",
                borderRadius: "0.75rem",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.15)",
                  transform: "scale(1.15)",
                },
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "primary.main",
              fontWeight: "bold",
              px: { xs: 3, md: 4 },
              py: { xs: 1, md: 1.2 },
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Portfolio
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              px: { xs: 3, md: 4 },
              py: { xs: 1, md: 1.2 },
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About Me
          </Button>
        </Box>
      </Box>

      {/* RIGHT SIDE — AVATAR */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ml: { xs: 0, md: -10 },
          mt: { xs: 2, md: 4 }, // ⭐ LIFT avatar upward to balance layout
        }}
      >
        <Avatar
          src={ReinaPic}
          alt="Reina"
          sx={{
            width: { xs: "14rem", sm: "16rem", md: "26rem" },
            height: { xs: "14rem", sm: "16rem", md: "26rem" },
            borderRadius: "50%",
            border: "0.4rem solid white",
            boxShadow: "0 0.6rem 1.4rem rgba(0,0,0,0.25)",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
}
