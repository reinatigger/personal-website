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
            maxWidth: 850,
            mx: "auto",
            mb: 4,
            color: "text.secondary",
            lineHeight: 1.9,
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          I’ve always enjoyed coffee ☕, and I first tried latte art when I was
          working at Burnt Cones. It’s not something I do regularly, just
          something I like to try whenever I get the chance to make a cup.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 850,
            mx: "auto",
            mb: 4,
            color: "text.secondary",
            lineHeight: 1.9,
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          I can pour rosettas and stacked tulips, but the swan still refuses to
          work out 🦢.
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
