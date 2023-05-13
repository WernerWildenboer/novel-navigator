import fileToBase64 from "./fileToBase64";

export const cleanPredictions = (predictions: string[]): string[] => {
  const placeholderPattern = /\[(.*?)\]/g;

  return predictions.map((str, index) => {
    if (placeholderPattern.test(str)) {
      if (index === 0) {
        return predictions[3];
      }

      return predictions[index - 1];
    }
    return str;
  });
};

const imageToText = async (imageFile: File, additionalInfo?: string) => {
  //microsoft/git-large-coco
  //microsoft/git-large-r-textcaps
  //Salesforce/blip-image-captioning-large
  const endpoint =
    "https://ybelkada-blip-image-captioning-space-large.hf.space/run/predict";
  //"https://nielsr-comparing-captioning-models.hf.space/run/predict";

  if (imageFile) {
    const imageFileBase64 = await fileToBase64(imageFile);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [imageFileBase64, additionalInfo, "Nucleus sampling"],
        }),
      });

      const result = await response.json();
      const predictions: string[] = result.data;
      return cleanPredictions(predictions);
    } catch (error) {
      return undefined;
    }
  }
};

export default imageToText;
