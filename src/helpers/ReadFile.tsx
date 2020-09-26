import { readFileSync } from "fs";
import path from "path";

export class ReadFile {
  public data: string;
  private dirPath: string = path.join(process.cwd(), "src");

  public constructor(public fileName: string) {}

  public read(): string {
    try {
      this.data = readFileSync(
        `${this.dirPath}/data/${this.fileName}.json`,
        "utf-8"
      );

      return this.data;
    } catch (err) {
      throw Error(`msg: Error, ${this.fileName} not readeable.`);
    }
  }
}
