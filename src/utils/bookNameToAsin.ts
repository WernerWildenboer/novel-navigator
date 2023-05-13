import axios from "axios";

// To unlock this function you first need to make 3 sales
const bookNameToAsin = async (title: string): Promise<string> => {
  const response = await axios.get(
    "https://amazon-product-advertising-api.com/search",
    {
      params: {
        accessKey: "YOUR_ACCESS_KEY",
        secretKey: "YOUR_SECRET_KEY",
        title: title,
        responseGroup: "ItemAttributes",
      },
    }
  );

  // Extract the ASIN from the response
  const asin: string = response.data.Items.Item[0].ASIN;

  return asin;
};

export default bookNameToAsin;
