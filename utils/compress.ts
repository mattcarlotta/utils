import compressFiles from "../compressFiles";

(async (): Promise<void> => {
  const dirs = [
    "compressFiles",
    "fileExists",
    "getFilePath",
    "removeFiles",
    "waitFor",
    "waitForAct",
    ""
  ].map(file => `${file ? `${file}/` : ""}index.js`);

  await compressFiles(dirs);
  process.exit(0);
})();
