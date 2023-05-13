import theme from "../../theme";

export const card = {
  width: "80%",
  margin: theme.spacing(2),
};

export const dropzoneContainer = {
  padding: theme.spacing(3),
  textAlign: "center",
  cursor: "pointer",
  border: "2px dashed transparent",
  backgroundImage: `linear-gradient(#000, #000), linear-gradient(to bottom, ${theme.palette.primary.main}, #000048)`,
  backgroundOrigin: `border-box`,
  backgroundClip: `padding-box, border-box`,
  borderRadius: theme.shape.borderRadius,
};

export const previewContainer = {
  marginTop: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const headingSection = {
  marginBottom: theme.spacing(2),
  textAlign: "center",
};

export const buttonSection = {
  marginTop: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
};

export const actionButtonRight = {
  borderRadius: 5,
  marginLeft: 1,
  textTransform: "none",
};

export const actionButtonLeft = {
  color: "white",
  borderRadius: 5,
  marginRight: 1,
  textTransform: "none",
};

export const actionButtonIcon = {
  bgcolor: theme.palette.primary.main,
  color: "primary.contrastText",
  borderRadius: "60%",

  "&:hover": {
    bgcolor: "primary.dark",
  },
};

export const previewImage = {
  maxWidth: "100%",
  maxHeight: "30vh",

  border: "3px solid",
  borderImage: `linear-gradient(to bottom, ${theme.palette.primary.main}, #000048)`,
  borderImageSlice: 1,
};

export const divider = {
  backgroundColor: "white",
  margin: theme.spacing(2),
};
