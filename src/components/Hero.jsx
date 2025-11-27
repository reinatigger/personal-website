import { Box, Typography, Button, Avatar } from "@mui/material";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 12,
        px: 8,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "70vh",
        gap: 8,
      }}
    >
      {/* LEFT SIDE — TEXT */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
          Hello, I’m <strong>Reina Tng</strong>
        </Typography>

        <Typography variant="h2" fontWeight={800} sx={{ mb: 3 }}>
          Building Products, Systems & Meaningful Experiences
        </Typography>

        <Typography
          variant="h6"
          sx={{
            opacity: 0.9,
            mb: 4,
            maxWidth: 520,
          }}
        >
          I enjoy solving problems at the intersection of product, engineering, 
          and user needs — bringing structure to ideas, clarity to workflows, 
          and creativity to the way solutions are built.
        </Typography>

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

      {/* RIGHT SIDE — PHOTO */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          src="https://placehold.co/300x300/f0f9ff/2563eb?text=Reina+Tng"
          sx={{
            width: 260,
            height: 260,
            border: "4px solid white",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        />
      </Box>
    </Box>
  );
}
