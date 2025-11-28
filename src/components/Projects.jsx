import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function Projects() {
  const projects = [
    {
      title: "JobSphere — AI-Enhanced Job Ecosystem",
      desc: "A full-stack multi-tenant platform designed to streamline hiring workflows with AI-powered resume insights, job-fit analysis, and structured applicant tracking.",
      // 🔥 Placeholder screenshots — replace later
      images: [
        "https://placehold.co/800x450/2563eb/ffffff?text=JobSphere+1",
        "https://placehold.co/800x450/2563eb/ffffff?text=JobSphere+2",
        "https://placehold.co/800x450/2563eb/ffffff?text=JobSphere+3",
      ],
      tags: ["React", "Express.js", "MongoDB", "Material UI"],
    },
    {
      title: "HDB Resale & BTO Data Analytics Platform",
      desc: "An end-to-end data engineering solution that processes and visualizes Singapore housing datasets to uncover price trends, location insights, and affordability patterns.",
      // 🔥 Placeholder screenshots — replace later
      images: [
        "https://placehold.co/800x450/9333ea/ffffff?text=HDB+Analytics+1",
        "https://placehold.co/800x450/9333ea/ffffff?text=HDB+Analytics+2",
      ],
      tags: ["Python", "Pandas", "PostgreSQL", "Streamlit"],
    },
  ];

  return (
    <Box id="projects" sx={{ py: 14, bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          textAlign="center"
          sx={{ mb: 1 }}
        >
          My Work
        </Typography>

        <Typography
          variant="h3"
          fontWeight="800"
          textAlign="center"
          sx={{ mb: 8 }}
        >
          Featured Projects
        </Typography>

        <Grid container>
          {projects.map((p, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={(theme) => ({
                  transform: "scale(0.85)",
                  transformOrigin: "top center",
                  boxShadow: 6,
                  borderRadius: 3,
                  overflow: "hidden",

                  // 🔥 Swiper arrows using MUI theme primary color
                  "& .swiper-button-next, & .swiper-button-prev": {
                    color: theme.palette.primary.main,
                  },

                  // 🔥 Active pagination dot uses primary color too
                  "& .swiper-pagination-bullet-active": {
                    background: theme.palette.primary.main,
                  },
                })}
              >
                {/* ⭐ Responsive Carousel */}
                <Box
                  sx={{
                    width: "100%",
                    position: "relative",
                    paddingTop: "62.5%", // 16:10 aspect ratio
                    overflow: "hidden",
                  }}
                >
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={0}
                    slidesPerView={1}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  >
                    {p.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={img}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>

                {/* Content */}
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                    {p.title}
                  </Typography>

                  <Typography sx={{ mb: 2, color: "text.secondary" }}>
                    {p.desc}
                  </Typography>

                  <Box>
                    {p.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        sx={{
                          mr: 1,
                          mb: 1,
                          bgcolor: "#f3f4f6",
                          fontSize: "0.8rem",
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
