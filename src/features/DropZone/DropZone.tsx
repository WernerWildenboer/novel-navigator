import React from "react";
import DropzoneView from "./DropZoneView";
import imageToText from "../../utils/imageToText";
import { librarianBookRecommendation } from "../../constants/gptPrompts";
import getChatResponse from "../../utils/getChatResponse";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  bookListRecoil,
  isLoading,
  loadingError,
  selectedGenre,
  selectedTextPrompt,
} from "../../recoil/appState";
import convertBookListToJson from "../../utils/bookListToJson";

interface DropzoneProps {
  onImageSelect: (file: File) => void;
}

const DropZone: React.FC<DropzoneProps> = (props) => {
  const { onImageSelect } = props;
  const textPrompt = useRecoilValue(selectedTextPrompt);
  const genre = useRecoilValue(selectedGenre);
  const setIsLoading = useSetRecoilState(isLoading);
  const setBookList = useSetRecoilState(bookListRecoil);
  const setLoadingError = useSetRecoilState(loadingError);

  const generateBookList = async (file: File) => {
    setIsLoading(true);
    setLoadingError(false);

    console.log("Getting book list");

    const imageCaptions = await imageToText(file, textPrompt);
    const chatGptPrompt = librarianBookRecommendation;
    if (imageCaptions) {
      console.log(`This what the AI sees: ${imageCaptions}`);

      // console.log(
      //   `This what the AI sees: ${imageCaptions[getRandomInt(0, 4)]}`
      // );
      try {
        const chatResponse = await getChatResponse(
          chatGptPrompt
            .replace("{imageCaption}", imageCaptions[0])
            .replace("{genre}", genre)
            .replace("{textPrompt}", textPrompt)
        );

        setBookList(convertBookListToJson(chatResponse));
      } catch (error) {
        setLoadingError(true);
      }
    } else {
      setLoadingError(true);
    }
    setIsLoading(false);
  };

  return (
    <DropzoneView onImageSelect={onImageSelect} submit={generateBookList} />
  );
};

export default DropZone;
