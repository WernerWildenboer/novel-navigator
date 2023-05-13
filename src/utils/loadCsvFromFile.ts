import Papa from "papaparse";
import { BookAttributes } from "./bookNameToAsinWithLookup";

const loadCsvFromFile = (
  filePath: string,
  callback: (data: BookAttributes[]) => void
) => {
  fetch(filePath)
    .then((response) => response.text())
    .then((csvString) => {
      const { data } = Papa.parse(csvString, {
        header: true,
        transformHeader: (header: string) => header.trim(),
      });

      const titleCategoriesData: BookAttributes[] = data.map((row: any) => ({
        title: row.title,
        asin: row.asin,
        categories: row.categories,
      }));

      callback(titleCategoriesData);
    })
    .catch((error) => {
      console.error("Failed to load CSV:", error);
    });
};

export default loadCsvFromFile;
