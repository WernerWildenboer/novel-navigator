import { cleanPredictions } from "../imageToText";

describe("replaceStrings", () => {
  const originalArray = ["foo", "bar", "[ foo9 ]", "foobar"];

  it("should replace strings that match the regex pattern with first element if first is valid", () => {
    const modifiedArray = cleanPredictions(originalArray);
    expect(modifiedArray).toEqual(["foo", "bar", "bar", "foobar"]);
  });

  it("should replace strings that match the regex pattern with last element if first is invalid", () => {
    const stringArray = ["[ foo9 ]", "bar", "[ foo9 ]", "foobar"];
    const modifiedArray = cleanPredictions(stringArray);
    expect(modifiedArray).toEqual(["foobar", "bar", "bar", "foobar"]);
  });

  // it("TODO", () => {
  //   const stringArray = ["[ foo9 ]", "[ foo9 ]", "[ foo9 ]", "[ foo9 ]"];
  //   const modifiedArray = cleanPredictions(stringArray);
  //   expect(modifiedArray).toEqual(["foobar", "bar", "bar", "foobar"]);
  // });

  it("should not replace strings that do not match the regex pattern", () => {
    const noMatchArray = ["hello", "world"];
    const modifiedArray = cleanPredictions(noMatchArray);
    expect(modifiedArray).toEqual(["hello", "world"]);
  });

  it("should replace partial matches", () => {
    const partialMatchArray: string[] = [
      "foo",
      "bar",
      "I am part of [ foo9 ]",
      "foobar",
    ];
    const modifiedArray = cleanPredictions(partialMatchArray);
    expect(modifiedArray).toEqual(["foo", "bar", "bar", "foobar"]);
  });

  it("should correctly handle an empty array", () => {
    const emptyArray: string[] = [];
    const modifiedArray = cleanPredictions(emptyArray);
    expect(modifiedArray).toEqual([]);
  });
});
