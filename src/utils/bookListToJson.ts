export interface Book {
  number?: number;
  name: string;
  author: string;
  link?: string;
}

const stringToArray = (chatGptString: string): string[] => {
  const bookListArray = chatGptString
    .split("\n")
    .filter((book) => book.trim() !== "");
  return bookListArray;
};

const convertBookListToJson = (chatGptString: string): Book[] => {
  const books = stringToArray(chatGptString);
  const bookList = books
    .map((book) => book.trim())
    .filter(Boolean)
    .map((book, index) => {
      const match = book.match(/^([\d.]+)\s*(.*)$/);
      if (!match) {
        console.log(`Invalid book: ${book}`);
      }
      const [_, num, titleAuthor] = match || ["1", "", "Could not load"];
      const [title, author] = titleAuthor.split(" by ");
      return {
        number: index + 1,
        name: title ? title.trim() : "",
        author: author ? author.trim() : "",
      };
    });

  return bookList;
};

export default convertBookListToJson;
