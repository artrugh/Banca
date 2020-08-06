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

// // FEATURES
export interface IFeatureData {
  settings: { header: IheaderSettings; items?: IitemSettings };
  header: IHeader;
  items?: { [key: string]: string }[];
}

// CAREER

interface ICareerSettings {
  header: IheaderSettings;
  items: {};
}

export interface IcareerData {
  settings: ICareerSettings;
  header: IHeader;
  item: [];
}

export interface IinitialData {
  split: IFeatureData;
  testimonial: IFeatureData;
  career: IcareerData;
}

export interface IPropsData {
  data: IinitialData;
}
