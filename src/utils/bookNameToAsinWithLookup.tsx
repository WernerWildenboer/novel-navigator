import Papa from "papaparse";
import loadCsvFromFile from "./loadCsvFromFile";

export interface BookAttributes {
  title: string;
  categories: string;
  asin: string;
}

// Define the function that loads CSV and returns title and categories data
const bookNameToAsinWithLookup = (
  bookTitle: string,
  callback: (data: BookAttributes) => void
): string => {
  const bookCSV = process.env.PUBLIC_URL + "/bookData.csv";
  loadCsvFromFile(bookCSV, (data) => {
    const filteredArray = data.filter((obj) =>
      obj.title
        ? obj.title.toLowerCase().includes(bookTitle.toLowerCase())
        : "Not found"
    );
    //console.log(filteredArray[0].asin);
    callback(filteredArray[0]);
  });
  return "Not found";
  //   const reader = new FileReader();

  //   reader.onload = (e: ProgressEvent<FileReader>) => {
  //     if (e.target && e.target.result) {
  //       const csvString = e.target.result as string;

  //       // Use PapaParse to parse the CSV string into an array of objects
  //       const { data } = Papa.parse(csvString, {
  //         header: true,
  //         transformHeader: (header) => header.trim(), // Optional: Trim the header names
  //       });

  //       // Transform the CSV data into an array of TitleCategories objects
  //       const titleCategoriesData: bookAttributes[] = data.map((row) => ({
  //         title: row.title,
  //         categories: row.categories
  //           .split(",")
  //           .map((category) => category.trim()), // Split and trim categories string
  //       }));
  //     }
  //   };

  //   // Read the CSV file as text
  //   reader.readAsText(csvFile);
  // };

  // // Example usage
  // const handleCsvFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const csvFile = e.target.files && e.target.files[0];

  //   if (csvFile) {
  //     loadCsvIntoTitleCategories(csvFile, (data) => {
  //       console.log(data); // Do something with the title and categories data
  //     });
  //   }
};

export default bookNameToAsinWithLookup;
