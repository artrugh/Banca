import { TecTools, ClientName, HeaderItemType } from "./enums";

export interface ITile {
  title: string;
  description: string;
  icon: string;
  alt: string;
}
// // Products
export interface IProduct {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  alt: string;
  status?: boolean;
  link?: string;
  repository?: string;
  tectools: TecTools[];
}
// // Career
export interface ICareer {
  title: string;
}

// // Testimonial
export interface ITestimonial {
  name: string;
  testimony: string;
  company: string;
  avatar: string;
}

// // Image Logo
export interface ITec {
  name: TecTools;
  src: string;
  width?: string;
  height?: string;
}

export interface IClient {
  name: ClientName;
  src: string;
  width?: string;
  height?: string;
}

export interface IHeader {
  title: string;
  role: HeaderItemType;
  on?: string;
  off?: string;
}

// Initial Data
export interface IData {
  products: Array<IProduct> | [];
  career: Array<ICareer> | [];
  testimonial: Array<ITestimonial> | [];
}
