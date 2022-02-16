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
import { useCallback, useEffect } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import type { NextPage } from "next";
import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";
import { RequestQuoteRounded } from "@mui/icons-material";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const keyFunction = useCallback((event) => {
    router.push("/bruh");
  }, []);
  useEffect(() => {
    document.addEventListener("click", keyFunction, false);
    document.addEventListener("keydown", keyFunction, false);

    return () => {
      document.removeEventListener("click", keyFunction, false);
      document.removeEventListener("keydown", keyFunction, false);
    };
  }, []);

  return (
    <Page noHeader sx={{ height: "100vh" }}>
      <Box>
        <Typography
          variant="h1"
          component="h1"
          fontWeight={"bold"}
          color="secondary"
          textAlign={"center"}
          sx={{ pt: 40 }}
        >
          What should that do?
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          color="primary"
          textAlign={"center"}
          sx={{ pt: 8 }}
        >
          {router.asPath.substring(1)}
        </Typography>
        <Typography
          variant="h5"
          component="h1"
          color="primary"
          textAlign={"center"}
        >
          Nothing you need I guess
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
        />
      </Box>
    </Page>
  );
};

export default Home;
