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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import type { NextPage } from "next";
import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";

const Contact: NextPage = () => {
  return (
    <Page>
      <Box sx={{ height: "100vh" }}>
        <Typography
          variant="h2"
          component="h2"
          color="secondary"
          textAlign={"center"}
          sx={{ pt: 18,pb:4 }}
        >
          Social Media
        </Typography>
        <Grid container sx={{ width: "80vw", mx: "10vw"}} spacing={30}>
          <Grid item >
            <Button
              href="https://twitter.com/Nudelsuppe42"
              sx={{ borderRadius: "0" }}
            >
              Twitter
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="https://www.youtube.com/channel/UCyIeClldFfWStmgGdOlMCQw"
              sx={{ borderRadius: "0" }}
            >
              Youtube
            </Button>
          </Grid>
          <Grid item>
            <Button href="discord" sx={{ borderRadius: "0" }}>
              Discord
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="https://www.instagram.com/nudelsuppe_42_/"
              sx={{ borderRadius: "0" }}
            >
              Instagram
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default Contact;
