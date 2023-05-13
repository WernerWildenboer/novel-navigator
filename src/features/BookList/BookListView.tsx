import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import {
  Box,
  Grid,
  Link,
  ListItemAvatar,
  Paper,
  useMediaQuery,
  IconButton,
} from "@mui/material";

import Divider from "@mui/material/Divider";
import {
  bookIcon,
  bookTitleMediumPlus,
  bookTitleSingleColumn,
  bookTitleSmall,
  buyButtonIcon,
  card,
  divider,
  dividerContainer,
  headingSection,
  listItem,
  listScroller,
  //promptBox,
  subTile,
} from "./styles";
import Avatar from "@mui/material/Avatar";
import BookIcon from "@mui/icons-material/Book";
import theme from "../../theme";

import { BookFinal } from "./BookList";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

interface BookListViewProps {
  books: BookFinal[];
}

interface BookListItemProps {
  bookSet: BookFinal[];
}

const BookListItem: React.FC<BookListItemProps> = (props) => {
  const { bookSet } = props;
  //const isMediumOrLess = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmallOrLess = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <List>
      {bookSet.map((book, index) => {
        return (
          <ListItem
            key={index}
            sx={listItem}
            secondaryAction={
              book.amazonLink ? (
                <Link
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* {isMediumOrLess ? (
                    <Button
                      variant="contained"
                      sx={buyButton}
                      endIcon={<ArrowCircleRightIcon />}
                    >
                      Buy Now
                    </Button>
                  ) : ( */}
                  <IconButton aria-label="link" color="primary" size="large">
                    <MonetizationOnIcon sx={buyButtonIcon} />
                  </IconButton>
                  {/* )} */}
                </Link>
              ) : null
            }
          >
            <ListItemAvatar>
              <Avatar>
                <BookIcon sx={bookIcon} />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={
                <Box sx={isSmallOrLess ? bookTitleSmall : bookTitleMediumPlus}>
                  <Typography variant="body1">{book.title}</Typography>
                </Box>
              }
              secondary={
                <Typography variant="caption">{book.author}</Typography>
              }
            />
            {/* {categories ? <Chip label={categories} /> : null} */}
          </ListItem>
        );
      })}
    </List>
  );
};

const BookListView: React.FC<BookListViewProps> = (props) => {
  const { books } = props;
  const firstSetBooks = books.slice(0, 5);
  const secondSetBooks = books.slice(5, 10);
  const isSmallOrLess = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={card}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box sx={headingSection}>
            <Typography variant="h5" gutterBottom>
              Book Companion List
            </Typography>
            {/* <Typography variant="subtitle1">
        Amazon affiliated links help support the website
      </Typography> */}
          </Box>
          <Box sx={dividerContainer}>
            <Divider sx={divider} />
          </Box>
        </Grid>
        {books.length ? (
          <React.Fragment>
            {isSmallOrLess ? (
              <React.Fragment>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <BookListItem bookSet={firstSetBooks} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <BookListItem bookSet={secondSetBooks} />
                </Grid>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Grid item xs={12} sm={12} md={12}>
                  <Paper sx={listScroller}>
                    <List>
                      {books.map((book, index) => (
                        <ListItem
                          key={index}
                          secondaryAction={
                            book.amazonLink ? (
                              <IconButton
                                aria-label="link"
                                sx={buyButtonIcon}
                                color="primary"
                                size="large"
                              >
                                <MonetizationOnIcon fontSize="inherit" />
                              </IconButton>
                            ) : null
                          }
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <BookIcon sx={bookIcon} />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Box sx={bookTitleSingleColumn}>{book.title}</Box>
                            }
                            secondary={
                              <Typography variant="body2">
                                {book.author}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
              </React.Fragment>
            )}
            {/* <Grid item xs={12}>
              <Typography variant="h6">
                This is what the AI is seeing:
              </Typography>
              <Box sx={promptBox}>
                <Typography variant="body1">{imageDescription}</Typography>
              </Box>
            </Grid> */}
          </React.Fragment>
        ) : (
          <Grid item xs={12}>
            <Typography sx={subTile} variant="subtitle1">
              Receive book recommendations that match the tone or aesthetic of
              an uploaded image
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default BookListView;
