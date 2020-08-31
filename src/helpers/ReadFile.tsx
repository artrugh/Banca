import { readFileSync } from "fs";
import path from "path";

export const readFile = (fileName: string): string => {
  const dirPath: string = path.join(process.cwd(), "src");

  try {
    const response = readFileSync(`${dirPath}/data/${fileName}.json`, "utf8");

    return response;
  } catch (err) {
    return "[]";
  }
};
