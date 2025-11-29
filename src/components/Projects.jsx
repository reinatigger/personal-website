import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import applicantJobListing from "../assets/applicant-joblisting.png";
import applicantNotif from "../assets/applicant-notif.png";
import applicantPipeline from "../assets/applicant-pipeline.png";
import applicantResume from "../assets/applicant-resume.png";
import employerJD from "../assets/employer-aiJD.png";
import employerRanking from "../assets/employer-airanking.png";
import resaleDashboard from "../assets/resale-dashboard.png";
import predictPart1 from "../assets/predict-part1.png";
import predictPart2 from "../assets/predict-part2.png";

export default function Projects() {
  const projects = [
    {
      title: "JobSphere — AI-Enhanced Job Ecosystem",
      desc: "A full-stack multi-tenant platform designed to streamline hiring workflows with AI-powered resume insights, job-fit analysis, and structured applicant tracking.",
      images: [
        applicantJobListing,
        applicantNotif,
        applicantPipeline,
        applicantResume,
        employerJD,
        employerRanking,
      ],
      tags: ["React", "Express.js", "MongoDB", "Material UI"],
    },
    {
      title: "HDB Resale & BTO Data Analytics Platform",
      desc: "An end-to-end data engineering solution that processes and visualizes Singapore housing datasets to uncover price trends, location insights, and affordability patterns.",
      images: [resaleDashboard, predictPart1, predictPart2],
      tags: ["Python", "Pandas", "PostgreSQL", "Streamlit"],
    },
  ];

  return (
    <Box id="projects" sx={{ pt: 10, pb: 10, bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary.light"
          textAlign="center"
          sx={{ mb: 1 }}
        >
          My Work
        </Typography>

        <Typography
          variant="h4"
          color="primary"
          fontWeight={800}
          textAlign="center"
          sx={{ mb: 6 }}
        >
          Projects I’ve Contributed To
        </Typography>

        {/* 🔥 Replace Grid with flex column */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 4 }, // control spacing between the two cards
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {projects.map((p, index) => (
            <Card
              key={index}
              sx={(theme) => ({
                flex: 1,
                maxWidth: { xs: "100%", md: "48%" }, // two side-by-side on desktop
                boxShadow: 6,
                borderRadius: 3,
                overflow: "hidden",

                "& .swiper-button-next, & .swiper-button-prev": {
                  color: theme.palette.primary.main,
                  transform: "scale(0.55)", // responsive size shrink
                },
                "& .swiper-pagination-bullet-active": {
                  background: theme.palette.primary.main,
                },
              })}
            >
              {/* ⭐ Screenshot Carousel */}
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  paddingTop: "55%", // tighter aspect ratio
                  overflow: "hidden",
                }}
              >
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
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
                          objectFit: "contain",
                          backgroundColor: "#f8f8f8",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>

              {/* Content */}
              <CardContent sx={{ p: 2 }}>
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
          ))}
        </Box>
      </Container>
    </Box>
  );
}
