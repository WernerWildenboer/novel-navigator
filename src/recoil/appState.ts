import { atom } from "recoil";
import { Book } from "../utils/bookListToJson";

export const selectedTextPrompt = atom({
  key: "selectedTextPrompt",
  default: "",
});

export const selectedGenre = atom({
  key: "selectedGenre",
  default: "Any",
});

export const isLoading = atom({
  key: "isLoading",
  default: false,
});

export const loadingError = atom({
  key: "loadingError",
  default: false,
});

export const bookListRecoil = atom({
  key: "bookListRecoil",
  default: [] as Book[],
});
