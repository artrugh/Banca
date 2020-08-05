// // // INITIAL DATA

// // HEADER
export interface IHeader {
  title: string;
  paragraph?: string;
}

// // SETTINGS

export interface IheaderSettings {
  title: number[];
  paragraph: number[];
}

interface IitemSettings {
  [propName: string]: number[];
}

export interface Iitem {
  item?: { [propName: string]: string };
  i?: number;
  settings?: IitemSettings;
}

// CAREER

interface ICareerSettings {
  header: IheaderSettings;
  items: {};
}

// // FEATURES

// TILE
export interface ItileData {
  settings: { header: IheaderSettings; items: IitemSettings };
  header: IHeader;
  items: { [key: string]: string }[];
}
// SPLIT
export interface IsplitData {
  settings: { header: IheaderSettings; items: IitemSettings };
  header: IHeader;
  items: { [key: string]: string }[];
}

// TESTIMONIAL
export interface ItestimonialData {
  settings: { header: IheaderSettings; items: IitemSettings };
  header: IHeader;
  items: { [key: string]: string }[];
}

// CAREER
export interface IcareerData {
  settings: ICareerSettings;
  header: IHeader;
  item: [];
}

export interface IinitialData {
  split: IsplitData;
  testimonial: ItestimonialData;
  career: IcareerData;
}

export interface IPropsData {
  data: IinitialData;
}
