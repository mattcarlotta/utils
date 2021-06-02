import {
  compressFile,
  fileExists,
  getFilePath,
  removeFiles,
  waitFor,
  waitForAct
} from "../index";

describe("Exports", () => {
  it("should export compressFile", () => {
    expect(compressFile).toBeDefined();
  });
  it("should export fileExists", () => {
    expect(fileExists).toBeDefined();
  });
  it("should export getFilePath", () => {
    expect(getFilePath).toBeDefined();
  });
  it("should export removeFiles", () => {
    expect(removeFiles).toBeDefined();
  });
  it("should export waitFor", () => {
    expect(waitFor).toBeDefined();
  });
  it("should export waitForAct", () => {
    expect(waitForAct).toBeDefined();
  });
});
