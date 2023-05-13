import React from "react";
import { CircularProgress, CircularProgressProps } from "@mui/material";
import { center } from "./styles";

interface LoaderProps extends CircularProgressProps {
  size?: number;
}
const Loader: React.FC<LoaderProps> = ({ size = 40, ...props }) => {
  return <CircularProgress size={size} {...props} sx={center} />;
};

export default Loader;
