import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";

export default function About() {
  const highlights = [
    {
      icon: <DashboardIcon color="primary" sx={{ fontSize: 40 }} />,
      label: "Product Management & Strategy",
    },
    {
      icon: <InsightsIcon color="primary" sx={{ fontSize: 40 }} />,
      label: "Business Analysis & Systems Design",
    },
    {
      icon: <CodeIcon color="primary" sx={{ fontSize: 40 }} />,
      label: "Software Engineering & Implementation",
    },
    {
      icon: <CloudIcon color="primary" sx={{ fontSize: 40 }} />,
      label: "Data & Cloud Technologies",
    },
  ];

  return (
    <Box id="about" sx={{ py: 12, bgcolor: "" }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {/* Section Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          sx={{ mb: 1 }}
        >
          About Me
        </Typography>

        <Typography variant="h3" fontWeight="800" sx={{ mb: 6 }}>
          Driven by Curiosity. Built Through Product, Systems & Engineering
          Thinking.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            maxWidth: 850,
            mx: "auto",
            mb: 6,
            color: "text.secondary",
            lineHeight: 1.9,
            textAlign: "justify", // ⭐ makes paragraphs aligned like "="
            textJustify: "inter-word", // ⭐ improves spacing between words
          }}
        >
          I’m a product, business analysis, and engineering–oriented builder
          pursuing a Bachelor of Computing (Information Systems) at the National
          University of Singapore. I enjoy solving complex problems through
          intuitive user experiences, scalable system design, and data-driven
          workflows.
          <br />
          <br />
          My experience spans product management, business analysis, and
          software engineering across organisations like Binance, GIC, August
          Robotics, and NCS, where I’ve contributed to user journey redesigns,
          enterprise workflow transformations, frontend engineering, and
          large-scale system testing.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            maxWidth: 850,
            mx: "auto",
            mb: 10,
            color: "text.secondary",
            lineHeight: 1.9,
            textAlign: "justify", // ⭐ same effect for second paragraph
            textJustify: "inter-word",
          }}
        >
          This website is my space to share projects, ideas, and learnings as I
          continue exploring the intersection of technology, finance, and
          product thinking.
        </Typography>

        {/* Highlights */}
        <Grid container spacing={4} justifyContent="center">
          {highlights.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={4}
                sx={{
                  py: 5,
                  px: 3, // ⭐ Added more padding left/right
                  height: "100%",
                  borderTop: "4px solid #2563eb",
                  borderRadius: 2,
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  {item.icon}
                  <Typography fontWeight="bold" sx={{ mt: 2 }}>
                    {item.label}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
