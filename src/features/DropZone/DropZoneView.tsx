import React, { useCallback, useState } from "react";
import Dropzone, { DropzoneState } from "react-dropzone";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  actionButtonIcon,
  actionButtonLeft,
  actionButtonRight,
  buttonSection,
  card,
  divider,
  dropzoneContainer,
  headingSection,
  previewContainer,
  previewImage,
} from "./styles";
import { Button, Divider, Grid, IconButton } from "@mui/material";
import DropdownTextInput from "../../components/DropdownTextInput";
import { useSetRecoilState } from "recoil";
import { selectedGenre, selectedTextPrompt } from "../../recoil/appState";
import TextInput from "../../components/TextInput";
import { genreList } from "../../constants/genreList";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

interface DropzoneViewProps {
  onImageSelect: (file: File) => void;
  submit: (file: File) => Promise<void>;
}

const DropzoneView: React.FC<DropzoneViewProps> = (props) => {
  const { onImageSelect, submit } = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const setTextPrompt = useSetRecoilState(selectedTextPrompt);
  const setSelectedGenre = useSetRecoilState(selectedGenre);

  const acceptedFileTypes = {
    image: [".jpg", ".jpeg", ".png", ".webp"],
  };
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      setSelectedFile(acceptedFiles[0]);
      onImageSelect(acceptedFiles[0]);
    },
    [onImageSelect]
  );

  const handleTextPromptChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTextPrompt(event.target.value);
    },
    [setTextPrompt]
  );

  const handleClear = () => {
    setSelectedFile(null);
  };

  const handleSubmit = () => {
    if (selectedFile) submit(selectedFile);
  };

  return (
    <Box sx={card}>
      <Box sx={headingSection}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="body1">Genre</Typography>
            <DropdownTextInput options={genreList} />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Typography variant="body1">
              Additional Text Prompt (Optional)
            </Typography>
            <TextInput
              label=""
              defaultValue=""
              onChange={handleTextPromptChange}
            />
          </Grid>
        </Grid>
      </Box>

      <Dropzone onDrop={handleDrop} accept={acceptedFileTypes}>
        {({ getRootProps, getInputProps, isDragActive }: DropzoneState) => (
          <Box
            {...getRootProps()}
            sx={dropzoneContainer}
            data-testid="dropzone-container"
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <Typography variant="body1">Drop the image here</Typography>
            ) : (
              <Typography variant="body1">
                Drag and drop an image here, or click to select files
              </Typography>
            )}
          </Box>
        )}
      </Dropzone>
      {selectedFile && (
        <Box sx={previewContainer}>
          <img
            key={selectedFile.name}
            src={URL.createObjectURL(selectedFile)}
            alt={selectedFile.name}
            style={previewImage}
          />
        </Box>
      )}
      <Box sx={buttonSection}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={handleClear}
          sx={actionButtonLeft}
          fullWidth
        >
          Clear
        </Button>

        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSubmit}
          sx={actionButtonRight}
          fullWidth
        >
          Get Booklist
        </Button>
      </Box>
    </Box>
  );
};

export default DropzoneView;
