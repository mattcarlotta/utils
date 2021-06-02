import fs from "fs";
import { minify } from "terser";
import type { MinifyOptions } from "terser";
import fileExists from "../fileExists";
import getFilePath from "../getFilePath";
import terserOptions from "../terser.config.json";

/**
 * A utility function to compress a list of files.
 *
 * @param files - an array of string filenames
 * @param opts - optional terser {@link https://github.com/terser/terser#minify-options `Options`}
 * @returns a promise
 * @example ```await compressFiles(["index.ts", "index.d.ts"], opts);```
 */
async function compressFiles(
  files: Array<string>,
  opts?: MinifyOptions
): Promise<void> {
  try {
    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];

      const filePath = getFilePath(file);

      if (!fileExists(filePath))
        throw String(
          `Unable to locate ${file}. The file doesn't appear to exist!`
        );

      /* eslint-disable no-await-in-loop */
      const { code } = await minify(
        fs.readFileSync(filePath, { encoding: "utf-8" }),
        opts || terserOptions
      );

      if (!code)
        throw String(
          `Unable to minify ${file}. No minified code was returned from terser!`
        );

      fs.writeFileSync(filePath, code, { encoding: "utf-8" });
    }
  } catch (error) {
    throw Error(error);
  }
}

export default compressFiles;
