import React from "react";
import { IconButton, Link } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { button, buttonSection } from "./styles";

const DonationsView = () => {
  return (
    <div style={buttonSection}>
      <Link
        href={"https://www.buymeacoffee.com/wwildenboel"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton size="medium" sx={button}>
          <FavoriteIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export default DonationsView;
