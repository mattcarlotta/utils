import { statSync } from "fs";

/**
 * A utility function to check if a file exists.
 *
 * @param file - filename
 * @returns a boolean
 * @example ```fileExists("example.js")```
 */
export default function fileExists(file: string): boolean {
  try {
    return statSync(file).isFile();
  } catch (e) {
    return false;
  }
}
