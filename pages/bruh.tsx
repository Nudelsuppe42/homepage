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
import { useEffect, useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import type { NextPage } from "next";
import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";
import { Router } from "@mui/icons-material";

const Home: NextPage = () => {
  const [count, setCount] = useState(-1);
  useEffect(() => {
    if (count == -1) {
      localStorage.setItem(
        "bruhcount",
        (parseInt(localStorage.getItem("bruhcount") || "0") + 1 > 999999999
          ? 0
          : parseInt(localStorage.getItem("bruhcount") || "0") + 1
        ).toString()
      );
      setCount(parseInt(localStorage.getItem("bruhcount") || "0"));
    }
  }, []);

  return (
    <Page sx={{ height: "100vh" }}>
      <Box sx={{ height: "100vh" }}>
        <Typography
          variant="h1"
          component="h1"
          fontWeight={"bold"}
          color="secondary"
          textAlign={"center"}
          sx={{ pt: 40 }}
        >
          You did something bruh-worthy
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          color="primary"
          textAlign={"center"}
          sx={{ pt: 8 }}
        >
          Bruh-Count: {count}
        </Typography>
        <Typography
          variant="h5"
          component="h1"
          color="primary"
          textAlign={"center"}
        >
          {countToMessage(count)}
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
    </Page>
  );
};

function countToMessage(count: number) {
  switch (count) {
    case -1:
      return "Loading...";
    case 0:
      return "How did you get here? Explain. It is impossible.";
    case 1:
      return "One Bruh on your list.";
    case 10:
      return "We are going into the two digits. Bruh.";
    case 42:
      return "Lucky number.";
    case 100:
      return "You are a true Bruh.";
    case 1000:
      return "You are a true true Bruh.";
    case 10000:
      return "You are a true true true Bruh.";
    case 100000:
      return "You are a true true true true Bruh.";
    case 1000000:
      return "You are a true true true true true Bruh.";
    case 10000000:
      return "You are a true true true true true true Bruh.";
    case 100000000:
      return "Wtf is this Bruh? ONE HUNDRET MILLION BRUHS";
    case 999999999:
      return "Cheater. Reseting next time :)";

    default:
      return "No Milestone right now :(";
  }
}

export default Home;
