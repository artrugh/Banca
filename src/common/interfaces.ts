import { Tech, TagType, Social, Languages, Tile, Client, Size } from "./enums";

export interface ITile {
  title: string;
  description: string;
  icon: Tile;
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
  tectools: Tech[];
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
export interface ITech {
  name: Tech;
  size?: Size;
}

export interface IClient {
  name: Client;
  size?: Size;
}

export interface IHeader {
  title: string;
  role: TagType;
  to: string;
  on?: string;
  off?: string;
}

export interface ICheckbox {
  title: string;
  role: TagType.checkbox;
  on: Languages;
  off: Languages;
}

export interface ISocial {
  title: Social;
  link: string;
  widthHeight: number;
}

// Initial Data
export interface IData {
  products: Array<IProduct> | [];
  careers: Array<ICareer> | [];
  testimonial: Array<ITestimonial> | [];
}
