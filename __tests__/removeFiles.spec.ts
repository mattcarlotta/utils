import fs from "fs";
import { join } from "path";
import type { Options } from "rimraf";
import removeFiles from "../removeFiles";
import fileExists from "../fileExists";

const root = process.cwd();
const fakeFile = join(root, "removefile.js");
const fakeFile2 = join(root, "removefile2.js");

const testRemoveFile = async (opts?: Options): Promise<void> => {
  let result = fileExists(fakeFile);
  let result2 = fileExists(fakeFile2);
  expect(result).toEqual(true);
  expect(result2).toEqual(true);

  await removeFiles(["removefile.js", "removefile2.js"], opts);

  result = fileExists(fakeFile);
  result2 = fileExists(fakeFile2);

  expect(result).toEqual(false);
  expect(result2).toEqual(false);
};

describe("Remove Files", () => {
  beforeEach(() => {
    fs.writeFileSync(fakeFile, "", {
      encoding: "utf-8"
    });
    fs.writeFileSync(fakeFile2, "", {
      encoding: "utf-8"
    });
  });

  it("removes a list of files", async () => {
    await testRemoveFile();
  });

  it("accepts options", async () => {
    await testRemoveFile({ disableGlob: false });
  });
});
