import convertBookListToJson from "../bookListToJson";

describe("convertBookListToJson", () => {
  it("should return empty JSON object when input string is empty", () => {
    expect(convertBookListToJson("")).toEqual([]);
  });

  it("should return JSON array of book objects when input string is valid", () => {
    const inputString = ` 
      1. The Shadow Out of Time by H. P. Lovecraft
      2. At the Mountains of Madness by H. P. Lovecraft
    `;
    const expectedOutput = [
      {
        number: 1,
        name: "The Shadow Out of Time",
        author: "H. P. Lovecraft",
      },
      {
        number: 2,
        name: "At the Mountains of Madness",
        author: "H. P. Lovecraft",
      },
    ];
    expect(convertBookListToJson(inputString)).toEqual(expectedOutput);
  });

  it("should handle white spaces before and after book title and author", () => {
    const inputString = `      1. To Kill a Mockingbird    by   Harper Lee    
      2. The Catcher in the Rye by J.D. Salinger  `;
    const expectedOutput = [
      { number: 1, name: "To Kill a Mockingbird", author: "Harper Lee" },
      { number: 2, name: "The Catcher in the Rye", author: "J.D. Salinger" },
    ];
    expect(convertBookListToJson(inputString)).toEqual(expectedOutput);
  });

  it('should handle book titles with "by" in them', () => {
    const inputString = `1. Beloved by Toni Morrison
    2. How to Win Friends and Influence People by Dale Carnegie`;
    const expectedOutput = [
      { number: 1, name: "Beloved", author: "Toni Morrison" },
      {
        number: 2,
        name: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
      },
    ];
    expect(convertBookListToJson(inputString)).toEqual(expectedOutput);
  });

  it("should handle book with big numbers", () => {
    const inputString = `1000. Beloved by Toni Morrison
    10. How to Win Friends and Influence People by Dale Carnegie`;
    const expectedOutput = [
      { number: 1, name: "Beloved", author: "Toni Morrison" },
      {
        number: 2,
        name: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
      },
    ];
    expect(convertBookListToJson(inputString)).toEqual(expectedOutput);
  });
});
