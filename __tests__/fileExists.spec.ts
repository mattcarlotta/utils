import fileExists from "../fileExists";

describe("File Exists", () => {
  it("returns falsy when a file is not found", () => {
    const result = fileExists("nonexistent.js");

    expect(result).toEqual(false);
  });

  it("returns true when a file is found", () => {
    const result = fileExists("index.ts");

    expect(result).toEqual(true);
  });
});
