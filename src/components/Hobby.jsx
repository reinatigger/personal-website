import { Box, Typography, Paper } from "@mui/material";
import Pouring from "../assets/latte_art.jpg";
import Art1 from "../assets/art5.jpg";
import Art2 from "../assets/art4.jpg";

export default function Hobby() {
  return (
    <Box
      id="hobby"
      sx={{
        pt: 10,
        pb: 10,
        backgroundColor: "background.paper",
      }}
    >
      {/* Section Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h5"
          fontWeight={700}
          color="primary.light"
          sx={{ mb: 1 }}
        >
          Personal Passions
        </Typography>

        <Typography
          variant="h4"
          fontWeight={800}
          sx={{ color: "primary.main" }}
        >
          Learning Latte Art
        </Typography>
      </Box>

      {/* TEXT BLOCK */}
      <Box
        sx={{
          maxWidth: "750px",
          mx: "auto",
          textAlign: "center",
          mb: 8,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            mx: "auto",
            mb: 4,
            color: "text.secondary",
            lineHeight: 1.8,
            textAlign: { xs: "left", sm: "justify" },
            px: { xs: 2, sm: 0 },
          }}
        >
          I’ve always enjoyed coffee ☕, and I first tried latte art when I was
          working at Burnt Cones. It’s not something I do regularly, just
          something I like to try whenever I get the chance to make a cup.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mx: "auto",
            mb: 4,
            color: "text.secondary",
            lineHeight: 1.8,
            textAlign: { xs: "left", sm: "justify" },
            px: { xs: 2, sm: 0 },
          }}
        >
          I can pour rosettas and stacked tulips, but the swan still refuses to
          work out 🦢.
        </Typography>
      </Box>

      {/* IMAGE ROW — THREE EQUAL IMAGES */}
      {/* IMAGE ROW — 100% RESPONSIVE */}
      <Box
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // mobile: 1 column stacked
            sm: "1fr 1fr", // small tablets: 2 columns
            md: "1fr 1fr 1fr", // desktop: 3 columns
          },
          gap: { xs: 2.5, sm: 3 }, // spacing between images
          px: { xs: 2, sm: 0 }, // phone-only horizontal padding
        }}
      >
        {[Pouring, Art1, Art2].map((src, idx) => (
          <Paper
            key={idx}
            elevation={3}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              transition: "0.3s",
              "&:hover": {
                transform: { sm: "scale(1.02)" }, // enable hover only on larger screens
              },
            }}
          >
            <img
              src={src}
              alt="latte art"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "260px", // responsive max height
                objectFit: "cover", // no distortion
                display: "block",
              }}
            />
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
