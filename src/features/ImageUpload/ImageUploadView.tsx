import React from "react";

import { Typography, Grid, Box } from "@mui/material";
import BookList from "../BookList/BookList";
import DropZone from "../DropZone/DropZone";
import Loader from "../../components/Loader";
import { Card } from "@mui/material";
import { card, errorSection, heading, highLighted, subHeading } from "./styles";
import { useRecoilValue } from "recoil";
import { bookListRecoil, isLoading, loadingError } from "../../recoil/appState";

interface ImageUploadViewProps {
  onImageSelect: (file: File) => void;
}

const ErrorMessage: React.FC = () => {
  return (
    <Box sx={errorSection}>
      <Typography variant="h3" align="center" sx={heading}>
        Error :\
      </Typography>
      <Typography variant="h6" align="center" sx={subHeading}>
        Uff, we ran into an error, please try again...
      </Typography>
    </Box>
  );
};

const ImageUploadView: React.FC<ImageUploadViewProps> = (props) => {
  const { onImageSelect } = props;

  const loading = useRecoilValue(isLoading);
  const books = useRecoilValue(bookListRecoil);
  const error = useRecoilValue(loadingError);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" sx={heading}>
          Images to <span style={highLighted}>Book</span> Recommendations
        </Typography>
        <Typography variant="h6" align="center" sx={subHeading}>
          Find Your Perfect Book Match Based On Your Visual Inspiration
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Card sx={card}>
          <DropZone onImageSelect={onImageSelect} />
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Card sx={card}>
          {loading ? (
            <Loader />
          ) : error ? (
            <ErrorMessage />
          ) : (
            <BookList bookList={books} />
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default ImageUploadView;
