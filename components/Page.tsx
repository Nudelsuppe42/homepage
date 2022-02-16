import * as React from "react";

import { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Header from "./Header";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

interface PageProps {
  children: React.ReactNode;
  noHeader?: boolean;
  sx?: object;
}

export default function Page({ children, noHeader,sx }: PageProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{ minHeight: "100vh", marginRight: "auto", marginLeft: "auto", ...sx }}
    >
      {noHeader == true ? null : scrollY > 400 ? <Header /> : null}

      {children}
      <div style={{ marginBottom: "200px" }}></div>
    </div>
  );
}
