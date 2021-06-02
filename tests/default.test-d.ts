import { expectType } from "tsd";
import utils from "@noshot/utils";

(async () => {
  expectType<void>(await utils.compressFiles(["tests/hello.js"]));
  expectType<boolean>(utils.fileExists("tests/hello.js"));
  expectType<string>(utils.getFilePath("hello.js", "tests"));
  expectType<void>(await utils.removeFiles(["tests/hello.js"]));
  expectType<void | Error>(await utils.waitFor(() => {
    console.log("expectation")
  }))
  expectType<undefined>(await utils.waitForAct(() => {
    console.log("expectation")
  }))
})()


