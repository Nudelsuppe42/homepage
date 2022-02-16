import {
  Avatar,
  Box,
  Button,
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
import { useCallback, useEffect } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import type { NextPage } from "next";
import Page from "../../components/Page";
import ProjectCard from "../../components/ProjectCard";
import { RequestQuoteRounded } from "@mui/icons-material";
import { useRouter } from "next/router";

const ESC: NextPage = () => {
  

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
          Eurovision Song Contest
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          color="primary"
          textAlign={"center"}
          sx={{ pt: 8 }}
        >
          2022
        </Typography>
        <Typography
          variant="h5"
          component="h1"
          color="primary"
          textAlign={"center"}
        >
          Light Design
        </Typography>
        <img
          src="/images/sound.png"
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
          How I got in
        </Typography>
        <Typography
          variant="body1"
          component="p"
          color="secondary"
          textAlign={"center"}
          sx={{ pt: 3, fontSize: 24 }}
          fontWeight={"normal"}
        >
          I was working in the Event Industry since 2010. Getting lots of
          experience in those years,
          <br /> sadly Corona hit hard and i had to find a new Job.
          <br />
          Now, i´ve managed to start working as a Light Designer again.
          <br />
          Since i have a friend in the Italian Event Industry, i´ve been able to
          work with him and with a bit of luck i got in.
          <br />
          [He was able to get in too :D]
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          color="secondary"
          textAlign={"center"}
          sx={{ pt: 38,pb:2 }}
        >
          Links
        </Typography>
        <Stack>
          <a href="https://eurovision.net/" style={{marginRight:"auto",marginLeft:"auto"}}>Eurovision Website</a>
          <br />
          <a href="https://eurovisionworld.com/eurovision/calendar" style={{marginRight:"auto",marginLeft:"auto"}}>
            Timetable
          </a>

        </Stack>
      </Box>
    </Page>
  );
};

export default ESC;
