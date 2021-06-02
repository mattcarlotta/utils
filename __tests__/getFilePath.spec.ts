import getFilePath from "../getFilePath";

describe("Get File Path", () => {
  it("by default combines the root directory with a file name", () => {
    const result = getFilePath("file.js");

    expect(result).toEqual(`${process.cwd()}/file.js`);
  });

  it("combines a directory with a file name", () => {
    const result = getFilePath("file.js", "src");

    expect(result).toEqual("src/file.js");
  });
});
