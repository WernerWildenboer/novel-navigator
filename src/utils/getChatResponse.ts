import "@firebase/functions";
import axios from "axios";

const getChatResponse = async (imageDescription: string) => {
  const imageDescriptionCleaned = imageDescription.trim();
  if (!imageDescriptionCleaned) {
    return;
  }
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: imageDescriptionCleaned,
        model: "text-davinci-003",
        max_tokens: 300,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
      }
    );
    return response.data.choices[0].text;
  } catch (err) {
    console.error("Failed to send message to server", err);
  }

  return;
};

export default getChatResponse;
