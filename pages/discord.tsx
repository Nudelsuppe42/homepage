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
      document.addEventListener("keydown", keyFunction, false);
  
      return () => {
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
            Nudelsuppe_42_#3571
          </Typography>
          
        </Box>
      </Page>
    );
  };
  
  export default Home;
  