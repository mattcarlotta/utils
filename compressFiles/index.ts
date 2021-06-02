import { readFileSync, writeFileSync } from "fs";
import { minify } from "terser";
import type { MinifyOptions } from "terser";
import fileExists from "../fileExists";
import getFilePath from "../getFilePath";

const terserOptions = {
  compress: {
    warnings: false,
    comparisons: false,
    inline: 2
  },
  mangle: {
    safari10: true
  },
  output: {
    comments: false,
    ascii_only: true
  }
};

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
        readFileSync(filePath, { encoding: "utf-8" }),
        opts || terserOptions
      );

      if (!code)
        throw String(
          `Unable to minify ${file}. No minified code was returned from terser!`
        );

      writeFileSync(filePath, code, { encoding: "utf-8" });
    }
  } catch (error) {
    throw Error(error);
  }
}

export default compressFiles;
