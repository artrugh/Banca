interface IItem {
  [key: string]: unknown;
}
interface ISettings {
  [key: string]: number[];
}

class checkLengthPropsData {
  public constructor(
    public readonly item: IItem,
    public readonly settings: ISettings
  ) {}

  public static check = (item: IItem, settings: ISettings): void | never => {
    const breaker = Object.keys(settings).length as number;

    Object.keys(item).forEach((key: string, index: number) => {
      if (index < breaker && settings[key]) {
        if (typeof item[key] === "string") {
          const itemLength = (item[key] as string).length as number;
          const setMaxLength = settings[key]![0] as number;

          if (itemLength > setMaxLength) {
            throw new Error("Check length!");
          }
        }
      }
    });
  };
}

export default checkLengthPropsData;
