import React, { FC, useEffect, useState } from "react";
import BookListView from "./DonationsView";
import { Book } from "../../utils/bookListToJson";
import asinToAmazonLink from "../../utils/asinToAmazonLink";
import DonationsView from "./DonationsView";

interface BookListProps {
  bookList: Book[];
  imageDescription?: string;
}

export type BookFinal = {
  id: number;
  asin: string;
  image_url: string;
  title: string;
  author: string;
  categories: string;
  amazonLink: string;
};

type BookJson = {
  id: number;
  asin: string;
  image_url: string;
  title: string;
  categories: string;
};

const handleLookup = (
  title: string,
  author: string,
  bookData: BookJson[]
): BookFinal => {
  if (bookData) {
    const book = bookData.find(
      (book) =>
        book &&
        book.title &&
        typeof book.title === "string" &&
        book.title.includes(title)
    );
    return book
      ? { ...book, author: author, amazonLink: asinToAmazonLink(book.asin) }
      : {
          id: 0,
          asin: "",
          image_url: "",
          title: title,
          author: author,
          categories: "",
          amazonLink: "",
        };
  }
  return {
    id: 1,
    title: "The Silmarillion",
    author: "H. P. Lovecraft",

    asin: "",
    image_url: "",

    categories: "",
    amazonLink: "",
  };
};

const buildBookList = (bookList: Book[], bookData: BookJson[]): BookFinal[] => {
  const bookListEnriched = bookList.map((book) => {
    return handleLookup(book.name, book.author, bookData);
  });
  return bookListEnriched;
};

const Donations: React.FC = (props) => {
  return <DonationsView />;
};

export default Donations;
