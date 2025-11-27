import { Box, Typography, Paper } from "@mui/material";

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
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          color="primary"
          sx={{ mb: 1 }}
        >
          Personal Passions
        </Typography>

        <Typography
          variant="h3"
          fontWeight={800}
          sx={{ color: "text.primary" }}
        >
          The Precision & Ritual of Coffee
        </Typography>
      </Box>

      {/* FLEX CONTAINER */}
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 8,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT — TEXT */}
        <Box sx={{ flex: 1 }}>
          {/* Use h6 instead of h5 to match the scale of other section subheaders */}
          <Typography
            variant="h6"
            fontWeight={700}
            color="primary"
            sx={{ mb: 3 }}
          >
            My Deep Dive into Latte Art & Brewing
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}
          >
            Coffee has become a small everyday ritual I really enjoy — part
            science, part creativity. I love understanding what makes a great
            cup: grind size, extraction time, and milk steaming techniques.
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}
          >
            Practising latte art has taught me patience and precision. It’s the
            same mindset I bring into my work — refining, experimenting, and
            improving one small step at a time.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", lineHeight: 1.7 }}
          >
            Whether it’s dialing in espresso or creating a balanced pour-over,
            coffee helps me slow down and appreciate process over outcome.
          </Typography>
        </Box>

        {/* RIGHT — IMAGE FLEXBOX */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {[
            "https://placehold.co/500x500/8d6e63/ffffff?text=Latte+1",
            "https://placehold.co/500x500/8d6e63/ffffff?text=Pour+Over",
            "https://placehold.co/500x500/8d6e63/ffffff?text=Me+%2B+Coffee",
            "https://placehold.co/500x500/8d6e63/ffffff?text=Latte+2",
          ].map((src, idx) => (
            <Paper
              key={idx}
              elevation={4}
              sx={{
                width: "48%",
                borderRadius: 3,
                overflow: "hidden",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <img
                src={src}
                alt="coffee hobby"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
