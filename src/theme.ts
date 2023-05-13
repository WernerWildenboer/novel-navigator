import { createTheme } from "@mui/material/styles";
import "./App.css";

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#FBFBFB",
      fontFamily: [
        "Raleway-Regular",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  },
  palette: {
    primary: {
      main: "#0000f9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#212121",
      paper: "#424242",
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export default theme;
