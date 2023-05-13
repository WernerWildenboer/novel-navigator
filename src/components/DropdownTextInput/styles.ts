import theme from "../../theme";

export const textInput = {
  input: {
    color: "white",
    margin: 1,
    marginLeft: 3,
  },
  border: "2px solid transparent",
  backgroundOrigin: `border-box`,
  backgroundClip: `padding-box, border-box`,
  borderRadius: theme.shape.borderRadius,
  backgroundImage: `linear-gradient(#000, #000), linear-gradient(to bottom, ${theme.palette.primary.main}, #000048)`,

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid transparent",
    },
  },
};

export const AutoInput = {};
