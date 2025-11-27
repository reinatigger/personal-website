import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip } from "@mui/material";

export default function Projects() {
  const projects = [
    {
      title: "Project Atlas: API Dashboard",
      desc: "A dashboard for monitoring API health across multiple regions.",
      img: "https://placehold.co/600x400/2563eb/ffffff?text=Project+Atlas",
      tags: ["React", "NodeJS", "D3.js"],
    },
    {
      title: "Recipe Engine",
      desc: "An ML prototype that recommends recipes from images.",
      img: "https://placehold.co/600x400/9333ea/ffffff?text=Recipe+Engine",
      tags: ["Python", "TensorFlow", "Flask"],
    },
    {
      title: "Productivity App UX Redesign",
      desc: "A redesigned interface for a legacy internal tool.",
      img: "https://placehold.co/600x400/0f766e/ffffff?text=UX+Redesign",
      tags: ["Figma", "UserTesting", "CSS"],
    },
  ];

  return (
    <Box id="projects" sx={{ py: 14, bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" color="primary" textAlign="center" sx={{ mb: 1 }}>
          My Work
        </Typography>

        <Typography variant="h3" fontWeight="800" textAlign="center" sx={{ mb: 8 }}>
          Featured Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((p, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ boxShadow: 6, ":hover": { transform: "translateY(-5px)", boxShadow: 12 }, transition: "0.3s" }}>
                <CardMedia component="img" height="180" image={p.img} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                    {p.title}
                  </Typography>
                  <Typography sx={{ mb: 2, color: "text.secondary" }}>{p.desc}</Typography>

                  {/* Tags */}
                  {p.tags.map((tag, i) => (
                    <Chip key={i} label={tag} sx={{ mr: 1, mb: 1, bgcolor: "#e5e7eb" }} />
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
