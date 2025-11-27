import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Box, Container, Typography, Paper, useTheme } from "@mui/material";

export default function Experiences() {
  const theme = useTheme();

  const experiences = [
    {
      title: "Product Manager Intern",
      company: "Binance (Binance Connect)",
      period: "Jul 2025 – Oct 2025",
      description:
        "Launched Send & Convert payment methods across 4 regions and redesigned user journeys.",
    },
    {
      title: "Business Analyst Intern",
      company: "GIC (Business Partner Solutions)",
      period: "Jan 2025 – Jun 2025",
      description:
        "Redesigned FX workflows and created a 55-test automated UI testing suite.",
    },
    {
      title: "Software Engineer Intern",
      company: "August Robotics",
      period: "Jul 2024 – Dec 2024",
      description:
        "Developed Next.js frontend features and collaborated with robotics hardware teams.",
    },
    {
      title: "Business Analyst Intern",
      company: "NCS Group",
      period: "Jan 2024 – Jun 2024",
      description:
        "Improved SAP payroll workflows and reduced open tickets by 15%.",
    },
  ];

  return (
    <Box id="experiences" sx={{ py: 14 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          color="primary"
          fontWeight={800}
          textAlign="center"
          sx={{ mb: 10 }}
        >
          Professional Journey
        </Typography>

        {/* ⭐ Entire timeline block shifted right + centered properly */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "center" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "90%", md: "75%", lg: "70%" } }}>
            <Timeline
              position="right"
              sx={{
                "& .MuiTimelineItem-root::before": { display: "none" },
                "& .MuiTimelineDot-root": {
                  backgroundColor: theme.palette.primary.main,
                  width: 14,
                  height: 14,
                  boxShadow: `0 0 0 4px ${theme.palette.primary.light}55`,
                },
                "& .MuiTimelineConnector-root": {
                  backgroundColor: theme.palette.text.secondary,
                  width: 2,
                  opacity: 0.3,
                },
              }}
            >
              {experiences.map((exp, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot />

                    {index < experiences.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>

                  <TimelineContent sx={{ pb: 6 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h6" fontWeight={700}>
                        {exp.title}
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        sx={{ color: "text.secondary", fontWeight: 500 }}
                      >
                        {exp.company}
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontStyle: "italic",
                          opacity: 0.8,
                          color: "text.secondary",
                        }}
                      >
                        {exp.period}
                      </Typography>
                    </Box>

                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        borderLeft: `4px solid ${theme.palette.primary.main}`,
                        borderRadius: 2,
                        backgroundColor: theme.palette.background.paper,
                      }}
                    >
                      <Typography>{exp.description}</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
