import fs from "fs";
import path from "path";

export function readFile() {
  const dirPath = path.join(process.cwd(), "src");
  //   const filePath = path.resolve("data/data.json");

  const data = fs.readFileSync(
    `${dirPath}/data/data.json`,
    "utf8",
    (err, data) => {
      if (err) throw err;
      return data;
    }
  );

  return data;
}
