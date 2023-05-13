import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import axios from "axios";

admin.initializeApp();

export const generateResponse = functions.https.onCall(
  async (data, context) => {
    // // Start writing functions
    // // https://firebase.google.com/docs/functions/typescript
    //

    //   functions.logger.info("Hello logs!", {structuredData: true});
    //   response.send("Hello from Firebase!");
    // });
    functions.logger.info("Hello logs!", { structuredData: true });
    functions.logger.info(process.env.OPENAI_API_KEY);
    console.log("running");
    const { message } = data;
    functions.logger.log("message");
    functions.logger.log(message);
    functions.logger.log(context);
    // Send message to ChatGPT
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        prompt: message,
        max_tokens: 60,
        temperature: 0.7,
        n: 1,
        stop: ["\n"],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const result = response.data.choices[0].text.trim();

    // Return ChatGPT response
    return { response: result };
  }
);
