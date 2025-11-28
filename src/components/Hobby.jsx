import { Box, Typography, Paper } from "@mui/material";
import Pouring from "../assets/latte_art.jpg";
import Art1 from "../assets/art5.jpg";
import Art2 from "../assets/art4.jpg";

export default function Hobby() {
  return (
    <Box
      id="hobby"
      sx={{
        py: 14,
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
          sx={{ color: "text.primary" }}
        >
          My Little Latte Art Hobby
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
          variant="h6"
          fontWeight={700}
          color="primary"
          sx={{ mb: 3 }}
        >
          From Burnt Cones to Home Coffees
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}
        >
          I picked up latte art when I worked at Burnt Cones — and it slowly
          became a small, comforting hobby. Nothing serious, just me trying to
          pour nicer hearts and tulips without the milk exploding everywhere.
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}
        >
          Most days, I just enjoy the process: steaming milk, trying new beans,
          and seeing if today’s pour turns out better than yesterday’s. It’s a
          fun, quiet ritual I look forward to.
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "text.secondary", lineHeight: 1.7 }}
        >
          Even if the art fails, at least I still get a good cup of coffee.
        </Typography>
      </Box>

      {/* IMAGE ROW — THREE EQUAL IMAGES */}
      <Box
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
          justifyContent: "center",
        }}
      >
        {[Pouring, Art1, Art2].map((src, idx) => (
          <Paper
            key={idx}
            elevation={4}
            sx={{
              flex: 1,
              borderRadius: 3,
              overflow: "hidden",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.03)" },
            }}
          >
            <img
              src={src}
              alt="latte hobby"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
              }}
            />
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
