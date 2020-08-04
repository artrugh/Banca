import { readFileSync } from "fs";
import path from "path";

export const readFile = (): string => {
  const dirPath: string = path.join(process.cwd(), "src");

  return readFileSync(`${dirPath}/data/data.json`, "utf8");
};
