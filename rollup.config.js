import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import terserOptions from "./terser.config.json";

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

export default [
  {
    preserveModules: true,
    input: ["index.ts"],
    output: [{ dir: "esm", format: "esm", entryFileNames: "[name].mjs" }],
    external: [
      "fs",
      "child_process",
      "path",
      "react",
      "react-dom",
      "react-dom/test-utils",
      "rimraf",
      "terser"
    ],
    plugins: [
      json(),
      typescript({ tsconfig: "./ts/tsconfig.esm.json" }),
      terser(terserOptions)
    ]
  }
];
