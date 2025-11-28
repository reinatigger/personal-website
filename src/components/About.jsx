import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"; // BA & requirements
import AccountTreeIcon from "@mui/icons-material/AccountTree"; // workflows
import TimelineIcon from "@mui/icons-material/Timeline"; // journeys
import HubIcon from "@mui/icons-material/Hub"; // systems & data

export default function About() {
  const theme = useTheme();

  const highlights = [
    {
      icon: <AssignmentTurnedInIcon color="primary" sx={{ fontSize: 40 }} />,
      label: "Business Analysis & Requirements",
    },
    {
      icon: <AccountTreeIcon color="primary" sx={{ fontSize: 40 }} />,
      label: "Process & Workflow Design",
    },
    {
      icon: <TimelineIcon color="primary" sx={{ fontSize: 40 }} />,
      label: "Product & User Journey Thinking",
    },
    {
      icon: <HubIcon color="primary" sx={{ fontSize: 40 }} />,
      label: "Systems & Data Understanding",
    },
  ];

  return (
    <Box id="about" sx={{ py: 12 }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {/* Section Title */}
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary.light"
          sx={{ mb: 1 }}
        >
          About Me
        </Typography>

        <Typography
          variant="h4"
          fontWeight="800"
          sx={{ mb: 6, color: "primary.main" }}
        >
          Where Business Needs Meet Systems Thinking
        </Typography>

        {/* Paragraph 1 */}
        <Typography
          variant="h6"
          sx={{
            maxWidth: 850,
            mx: "auto",
            mb: 6,
            color: "text.secondary",
            lineHeight: 1.9,
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          I’m an Information Systems undergraduate at the National University of
          Singapore with a strong interest in business analysis and systems
          design. I enjoy understanding how teams work, mapping out workflows,
          and translating real user needs into clear and actionable
          requirements. Whether it's analysing gaps, improving processes, or
          shaping product logic, I’m driven by making systems easier to
          understand and use.
        </Typography>

        {/* Paragraph 2 */}
        <Typography
          variant="h6"
          sx={{
            maxWidth: 850,
            mx: "auto",
            mb: 10,
            color: "text.secondary",
            lineHeight: 1.9,
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          Through my roles at Binance, GIC, August Robotics, and NCS, I’ve
          worked on requirement gathering, workflow redesigns, user journey
          improvements, and end-to-end system testing. These experiences exposed
          me to how enterprise systems and products are built, and shaped the
          way I think about clarity, structure, and the importance of designing
          solutions that are both scalable and intuitive for users.
        </Typography>

        {/* Skill Highlights */}
        <Grid container spacing={4} justifyContent="center">
          {highlights.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={4}
                sx={{
                  py: 5,
                  px: 3,
                  height: "100%",
                  borderTop: `${theme.spacing(0.5)} solid ${
                    theme.palette.primary.main
                  }`,
                  borderRadius: 2,
                  maxWidth: 200
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  {item.icon}
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    sx={{ mt: 2, lineHeight: 1.4 }}
                  >
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
