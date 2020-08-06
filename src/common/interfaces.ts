// // // INITIAL DATA

// // HEADER
export interface IHeader {
  title: string;
  paragraph?: string;
}

// // SETTINGS

export interface IItem {
  item?: { [propName: string]: string };
  delay?: number;
}

// // FEATURES
export interface IFeatureData {
  header: IHeader;
  items?: { [key: string]: string }[];
}

// CAREER

export interface IInitialData {
  split: IFeatureData;
  testimonial: IFeatureData;
  career: IFeatureData;
}

export interface IPropsData {
  data: IInitialData;
}
