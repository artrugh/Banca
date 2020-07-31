import { readFileSync } from "fs";
import path from "path";

export const readFile = (): string => {
  const dirPath: string = path.join(process.cwd(), "src");

  // path.join(__dirname, '../../client/index.html'),
  //   const filePath = path.resolve("data/data.json");
  return readFileSync(`${dirPath}/data/data.json`, "utf8");
};
