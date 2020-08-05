class checkLenghPropsData {
  public constructor(
    public readonly item: { [key: string]: string },
    public readonly settings: { [key: string]: number[] }
  ) {}

  public static check = (item, settings): void | never => {
    const breaker = Object.keys(settings).length as number;
    Object.keys(item).forEach((key, index) => {
      if (index < breaker) {
        const itemLength = item[key].length as number;
        const setMaxLength = settings[key]![0] as number;

        if (itemLength > setMaxLength) {
          throw new Error("Check length!");
        }
      }
    });
  };
}

export default checkLenghPropsData;
