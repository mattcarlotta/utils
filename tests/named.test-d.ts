import { expectType } from "tsd";
import { compressFiles, fileExists, getFilePath, removeFiles, waitFor, waitForAct } from "@noshot/utils";

(async () => {
  expectType<void>(await compressFiles(["tests/hello.js"]));
  expectType<boolean>(fileExists("tests/hello.js"));
  expectType<string>(getFilePath("hello.js", "tests"));
  expectType<void>(await removeFiles(["tests/hello.js"]));
  expectType<void | Error>(await waitFor(() => {
    console.log("expectation")
  }))
  expectType<undefined>(await waitForAct(() => {
    console.log("expectation")
  }))
})()