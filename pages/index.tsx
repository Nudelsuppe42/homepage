import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import type { NextPage } from "next";
import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";

const Home: NextPage = () => {
  const DarkTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      maxWidth: "none",
      fontSize: "1rem",
    },
  }));

  return (
    <Page>
      <Box sx={{ height: "100vh" }}>
        <Typography
          variant="h1"
          component="h1"
          fontWeight={"bold"}
          color="secondary"
          textAlign={"center"}
          sx={{ pt: 40 }}
        >
          Nudelsuppe_42
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          color="primary"
          textAlign={"center"}
          sx={{ pt: 8 }}
        >
          I write code
        </Typography>
        <Typography
          variant="h5"
          component="h1"
          color="primary"
          textAlign={"center"}
        >
          I run shows
        </Typography>
        <img
          src="/images/noodles.png"
          height="100"
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            display: "block",
            marginTop: 180,
          }}
          alt="You know what? These alt-texts will kill me. I hate you"
        ></img>
      </Box>

      <Divider />
      <Box sx={{ height: "100vh" }}>
        <Typography
          variant="h2"
          component="h2"
          color="secondary"
          textAlign={"center"}
          sx={{ pt: 38 }}
        >
          About me
        </Typography>
        <Typography
          variant="body1"
          component="p"
          color="secondary"
          textAlign={"center"}
          sx={{ pt: 3, fontSize: 24 }}
          fontWeight={"normal"}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities*/}
          I'm a Light & Video Designer living in{" "}
          <a
            style={{ fontSize: 24 }}
            href="https://de.wikipedia.org/wiki/Germany"
            target="_blank"
            rel="noopener noreferrer"
          >
            Germany
          </a>
          .
          <br />
          In my free time i like to play{" "}
          <DarkTooltip title="I highligh suggest you play Cities Skylines! And listen to `1984`">
            <Typography
              variant="body1"
              component="p"
              color="secondary"
              textAlign={"center"}
              sx={{ fontSize: 24 }}
              fontWeight={"normal"}
            >
              various games and listen to music.
            </Typography>
          </DarkTooltip>
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          color="secondary"
          textAlign={"center"}
          sx={{ pt: 8 }}
        >
          Projects
        </Typography>

        <Grid container spacing={2} sx={{ mx: "10vw", width: "80vw", mt: 3 }}>
          <Grid item xs={4}>
            <ProjectCard
              title="Build The Earth"
              logo="https://buildtheearth.net/assets/img/site-logo-animated.gif"
              content="Recreating the Earth in Minecraft"
              href="https://buildtheearth.net"
            />
          </Grid>
          <Grid item xs={4}>
            <ProjectCard
              title="Eurovision"
              logo="https://i0.wp.com/esc-kompakt.de/wp-content/uploads/2022/01/ESC-2022-The-Sound-of-Beauty.jpg"
              content="Light Operations at Eurovision 2022"
              href="https://www.eurovision.de/"
            />
          </Grid>
          <Grid item xs={4}>
            <ProjectCard
              title="Minefact Progress"
              logo="/images/mfpLogo.png"
              content="A Progress Tracker for Minefact"
              href="https://newyork.minefact.de"
            />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default Home;
