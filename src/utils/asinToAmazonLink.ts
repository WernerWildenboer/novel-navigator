const asinToAmazonLink = (asin: string): string => {
  const associateTag = "novelnavigato-20";
  return `https://www.amazon.com/dp/${asin}/?tag=${associateTag}`;
};

export default asinToAmazonLink;
