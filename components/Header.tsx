import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "rgb(10, 10, 10)" }}
      elevation={0}
    >
      <Toolbar sx={{mx:"auto"}}>
        <Breadcrumbs separator="~" aria-label="breadcrumb">
          <Link color="rgb(230, 230, 230)" href="/" underline="none">
            Home
          </Link>
          <Link color="rgb(230, 230, 230)" href="/contact"underline="none">
            Development
          </Link>
          <Link color="rgb(230, 230, 230)" href="/contact"underline="none">
            Live shows
          </Link>
          <Link color="rgb(230, 230, 230)" href="/contact"underline="none">
            Contact
          </Link>
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
}
