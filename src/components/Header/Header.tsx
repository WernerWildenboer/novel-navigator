import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import { center } from "./styles";
import AppBar from "@mui/material/AppBar";
interface AppBarProps {
  size?: number;
}
const Header: React.FC<AppBarProps> = () => {
  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Novel Navigator
      </Typography>
    </AppBar>
  );
};

export default Header;
