import * as React from "react";

import { Avatar, CardHeader } from "@mui/material";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface CardProps {
  title: string;
  logo: string;
  content: React.ReactNode;
  href: string;
}

export default function ProjectCard({ logo, title, content, href }: CardProps) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{borderRadius:0, borderLeft:4, borderColor:"rgb(255, 196, 0,0.8)"}}>
        <CardHeader
          title={
            <Typography
              sx={{ my: "auto", fontSize: "24px" }}
              color="text.primary"
            >
              {title}
            </Typography>
          }
          avatar={<Avatar src={logo}></Avatar>}
        ></CardHeader>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography variant="body1" sx={{ my: "auto", fontSize: "20px" }}>
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={href}>
            Visit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
