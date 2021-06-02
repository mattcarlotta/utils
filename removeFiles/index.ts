import rimraf from "rimraf";
import type { Options } from "rimraf";
import getFilePath from "../getFilePath";

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
