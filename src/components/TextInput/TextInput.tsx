import { useState } from "react";
import { TextField, TextareaAutosize, styled } from "@mui/material";
import { text, textInput } from "./styles";

interface TextInputProps {
  defaultValue?: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ defaultValue = "", label, onChange }: TextInputProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(event);
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      sx={textInput}
      InputProps={{
        sx: text,
      }}
      multiline
      maxRows={4}
      color="primary"
      variant="standard"
    />
  );
};

export default TextInput;
