import React, { useEffect, useState } from "react";
import BookListView from "./BookListView";
import { Book } from "../../utils/bookListToJson";
import asinToAmazonLink from "../../utils/asinToAmazonLink";

interface BookListProps {
  bookList: Book[];
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

const BookList: React.FC<BookListProps> = (props) => {
  const { bookList } = props;
  const [bookListToDisplay, setBookListToDisplay] = useState<BookFinal[]>([]);
  const [bookData, setBookData] = useState<BookJson[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/bookData.json"); // Fetch the JSON file from public folder
        const data = await response.json(); // Parse the response as JSON
        setBookData(data); // Update state with the JSON data
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  const mockBookList = [
    {
      id: 1,
      title: "The Silmarillion",
      author: "H. P. Lovecraft",

      asin: "",
      image_url: "",

      categories: "",
      amazonLink: "",
    },
  ];

  useEffect(() => {
    if (bookData) {
      setBookListToDisplay(buildBookList(bookList, bookData));
    }
  }, [bookData, bookList]);

  return (
    <React.Fragment>
      <BookListView
        books={bookListToDisplay ? bookListToDisplay : mockBookList}
        //books={mockBookList}
      />
    </React.Fragment>
  );
};

export default BookList;
