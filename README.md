<div align="center" style="margin: 20px 0;">
  <img src="https://github.com/no-shot/utils/blob/main/noshotLogo.png?raw=true" width="450px">
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/@noshot/utils">
    <img src="https://img.shields.io/npm/v/no-shot/utils.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a href="https://github.com/no-shot/utils/actions?query=workflow%3A%22Publish+Workflow%22">
    <img src="https://img.shields.io/github/workflow/status/no-shot/utils/Publish%20Workflow?style=for-the-badge&labelColor=000000">
  </a>
  <a href="https://codecov.io/gh/no-shot/utils/branch/main">
    <img src="https://img.shields.io/codecov/c/github/no-shot/utils?style=for-the-badge&labelColor=000000">
  </a>
  <a href="https://github.com/no-shot/utils/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/utils.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a href="https://www.npmjs.com/package/@noshot/utils">
    <img src="https://img.shields.io/npm/dm/@noshot/utils?style=for-the-badge&labelColor=000000">
  </a>
</p>

A handful of helpful utility functions.

## Quick Links

[Installation](#installation)

[Utility Functions](#utility-functions)
  - [compressFiles](#compressfiles)
  - [fileExists](#fileexists)
  - [getFilePath](#getfilepath)
  - [removeFiles](#removefiles)
  - [waitFor](#waitfor)
  - [waitForAct](#waitforact)

[ESM Support](#esm-support)


## Installation

```bash
# with npm
npm install @noshot/utils react react-dom

# or with yarn
yarn add @noshot/utils react react-dom
```

## Utility Functions

A list of functions that are exported from this package.

### compressFiles

This **asynchronous** function utilizes [terser](https://www.npmjs.com/package/terser) to compress an array of files with optional minify [options](https://github.com/terser/terser#minify-options).

Dependencies: terser

Arguments (2):
```
files: Array<string>,
opts?: MinifyOptions
```

Example:
```ts
import { compressFiles } from "@noshot/utils";
// import compressFiles from "@noshot/utils/compressFiles";

(async(): Promise<void> => {
  const dirs = [
      "folder1",
      "folder2",
      "folder3"
    ].map(file => `${file ? `${file}/` : ""}index.js`);

  await compressFiles(dirs);
  process.exit(0);
})();
```

### fileExists

This **synchronous** function utilizes node's [fs](https://nodejs.org/api/fs.html) API to check if a file exists.

Dependencies: (none if using node v12+)

Arguments (1):
```
file: string
```

Example:
```ts
import { getFilePath, fileExists } from "@noshot/utils";
// import getFilePath from "@noshot/utils/getFilePath";
// import fileExists from "@noshot/utils/fileExists";

((): void => {
  const path = getFilePath("hello.js") // process.cwd() + hello.js
  const result = fileExists(path);
  console.log(typeof result, result) // boolean, true/false
  process.exit(0);
})();
```

### getFilePath

This **synchronous** function utilizes node's [path](https://nodejs.org/api/path.html) API to join a directory path with a file name.

Dependencies: (none if using node v12+)

Arguments (2):
```
file: string,
dir?: string
```

Example:
```ts
import { getFilePath } from "@noshot/utils";
// import getFilePath from "@noshot/utils/getFilePath";

((): void => {
  const path = getFilePath("hello.js") // process.cwd() + hello.js
  console.log(typeof path, path) // string, "path/to/project/hello.js"

  const customPath = getFilePath("hello.js", "src"); // src + hello.js (path starts from project directory)
  console.log(typeof customPath, customPath) // string, "path/to/project/src/hello.js"
  process.exit(0);
})();
```

### removeFiles

This **asynchronous** function utilizes [rimraf](https://www.npmjs.com/package/rimraf) to remove an array of files with optional rimraf [options](https://github.com/isaacs/rimraf#options).

Dependencies: rimraf

Arguments (2):
```
files: Array<string>,
opts?: rimraf.Options
```

Example:
```ts
import { removeFiles } from "@noshot/utils";
// import removeFiles from "@noshot/utils/removeFiles";

(async(): Promise<void> => {
  const dirs = [
      "folder1",
      "folder2",
      "folder3"
    ].map(file => `${file ? `${file}/` : ""}index.js`);

  await removeFiles(dirs);
  process.exit(0);
})();
```

### waitFor

This **asynchronous** function waits for an asynchronous expectation to resolve.

Dependencies: (none if using node v12+)

Arguments (2):
```
callback: Function,
timeout?: string // default 1000ms
```

Example:
```ts
import { waitFor } from "@noshot/utils";
// import waitFor from "@noshot/utils/waitFor";

it("waits for an asynchronous expectation to succeed", async () => {
  await waitFor(() => {
    expect(result).toEqual("hi");
  });
});
```

### waitForAct

This **asynchronous** function utilizes [ReactDOM](https://www.npmjs.com/package/react-dom) to wait for an asynchronous expectation wrapped in `act` to resolve. This function should work any testing suite, as long as it supports resolving promises.

Dependencies: React, ReactDOM

Arguments (2):
```
callback: Function,
timeout?: string // default 1000ms
```

Example:
```tsx
import * as React from "react";
import { waitForAct } from "@noshot/utils";
// import waitForAct from "@noshot/utils/waitForAct";
import { mount } from "enzyme"
import Example from "../index";

const wrapper = mount(<Example />);

it("waits for an asynchronous expectation to succeed", async () => {
  await waitForAct(() => {
    expect(wrapper.find(".example").exists()).toBeTruthy();
  });
});
```

### ESM Support

As of Node v12.17.0+, node removed the experimental flag for ES modules. Unfortunately, most of development world has yet to adopt ESM as the standard. Therefore, until there's more widespread support, this documentation will caution against using ESM and instead opt for CJS. In addition, node doesn't support preloading ESM, since it utilizes Node's require function. That said, this package offers experimental support for ESM. You can try it out by importing from the `esm` directory of the package:

```ts
import utils from "@noshot/utils/esm";
// import { compressFiles, fileExists, getFilePath, ...etc } from "@noshot/utils/esm";
```

## Contributing Guide

See [CONTRIBUTING.md](CONTRIBUTING.md)

