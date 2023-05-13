import theme from "../../theme";

export const button = {
  bgcolor: theme.palette.primary.main,
  color: "primary.contrastText",
  borderRadius: "60%",

  "&:hover": {
    bgcolor: "primary.dark",
  },
};

export const buttonSection = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  marginBottom: "20px",
};
