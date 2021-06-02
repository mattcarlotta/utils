import rimraf from "rimraf";
import type { Options } from "rimraf";
import getFilePath from "../getFilePath";

/**
 * A utility function to remove a list of files.
 *
 * @param files - an array of string filenames
 * @param opts - optional rimraf {@link https://github.com/isaacs/rimraf#options `Options`}
 * @returns a promise
 * @example ```await removeFiles(["index.ts", "index.d.ts"], opts);```
 */
async function removeFiles(
  files: Array<string>,
  opts?: Options
): Promise<void> {
  const promises: Array<Promise<string>> = [];

  files.forEach(file => {
    promises.push(
      new Promise(res =>
        rimraf(getFilePath(file), (opts ?? {}) as Options, () => {
          res("");
        })
      )
    );
  });

  await Promise.all(promises);
}

export default removeFiles;
