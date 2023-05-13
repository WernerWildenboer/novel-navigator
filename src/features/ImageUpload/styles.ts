import theme from "../../theme";

export const heading = {
  marginTop: theme.spacing(2),
};

export const errorSection = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const highLighted = { color: "#fff" };
export const subHeading = {};

export const card = {
  padding: theme.spacing(1),
  height: "70vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid transparent",
  backgroundImage: `linear-gradient(#050505 , #050505), linear-gradient(to bottom, ${theme.palette.primary.main}, #000048)`,
  backgroundOrigin: `border-box`,
  backgroundClip: `padding-box, border-box`,
  borderRadius: "17px",
};
