import fs from "fs";
import { join } from "path";
import compressFiles from "../compressFiles";

const root = process.cwd();
const fakeFile = join(root, "hello.js");
const fakeFile2 = join(root, "goodbye.js");

const code = `
(() => {
  try {
    console.log("Hello World!");
  } catch(err) {
    console.error(err.toString())
  }
})()
`;

const compressedCode =
  '(()=>{try{console.log("Hello World!")}catch(o){console.error(o.toString())}})();';

describe("Compress Files", () => {
  beforeAll(() => {
    fs.writeFileSync(fakeFile, code, {
      encoding: "utf-8"
    });
    fs.writeFileSync(fakeFile2, "", {
      encoding: "utf-8"
    });
  });

  it("fails to find a file", async () => {
    try {
      await compressFiles(["nonexistantfile.js"]);
    } catch (error) {
      expect(error.toString()).toEqual(
        "Error: Unable to locate nonexistantfile.js. The file doesn't appear to exist!"
      );
    }
  });

  it("fails to compress an empty file", async () => {
    try {
      await compressFiles(["goodbye.js"]);
    } catch (error) {
      fs.unlinkSync(fakeFile2);
      expect(error.toString()).toEqual(
        "Error: Unable to minify goodbye.js. No minified code was returned from terser!"
      );
    }
  });

  it("compresses the file", async () => {
    await compressFiles(["hello.js"]);

    const compressedFile = fs.readFileSync(fakeFile);
    expect(compressedFile.toString()).toEqual(compressedCode);

    fs.unlinkSync(fakeFile);
  });
});
