import React, { useCallback, useState } from "react";
import Autocomplete, {
  AutocompleteRenderInputParams,
} from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { AutoInput, textInput } from "./styles";
import { useSetRecoilState } from "recoil";
import { selectedGenre } from "../../recoil/appState";

interface Option {
  label: string;
  value: string;
}

interface DropdownTextInputProps {
  options: Option[];
}

const DropdownTextInput: React.FC<DropdownTextInputProps> = ({ options }) => {
  const [value, setValue] = useState<Option | null>({
    label: "Any",
    value: "any",
  });
  const setSelectedGenre = useSetRecoilState(selectedGenre);
  const handleOnChange = (
    event: React.SyntheticEvent,
    newValue: Option | null
  ) => {
    if (newValue) setSelectedGenre(newValue.value);
    setValue(newValue);
    return newValue;
  };

  const renderInput = (params: AutocompleteRenderInputParams) => (
    <TextField
      {...params}
      label=""
      color="primary"
      variant="standard"
      sx={textInput}
    />
  );

  return (
    <Autocomplete
      sx={AutoInput}
      value={value}
      onChange={handleOnChange}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      options={options}
      renderInput={renderInput}
    />
  );
};

export default DropdownTextInput;
