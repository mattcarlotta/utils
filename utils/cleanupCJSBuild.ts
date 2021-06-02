import removeFiles from "../removeFiles";

(async () => {
  const files = [
    "compressFiles",
    "fileExists",
    "getFilePath",
    "removeFiles",
    "waitFor",
    "waitForAct",
    ""
  ].map(file => `${file ? `${file}/` : ""}index.js`);

  await removeFiles(files);
})();
