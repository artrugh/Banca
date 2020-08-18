// // // INITIAL DATA

// // HEADER
export interface IHeader {
  title: string;
  paragraph?: string;
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
