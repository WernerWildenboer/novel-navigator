import { Book } from "./bookListToJson";
import bookNameToAsin from "./bookNameToAsin";

// Your unique Associate ID is novelnavigato-20

const bookToAmazonLink = async (bookList: Book): Promise<string> => {
  const associateTag = "novelnavigato-20"; // Replace with your Amazon Associate Tag
  const baseUrl = "https://www.amazon.com/dp/";

  const asinCode = await bookNameToAsin(bookList.name);
  if (!asinCode) {
    throw new Error(`No ASIN code found for book "${bookList.name}"`);
  }
  const query = `tag=${associateTag}`;
  const url = `${baseUrl}${asinCode}/?${query}`;
  return url;
};

export default bookToAmazonLink;
