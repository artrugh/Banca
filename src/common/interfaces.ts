import { TecTools } from "./enums";

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
  tecTools: TecTools[];
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
export interface IImageLogo {
  name: TecTools;
  src: string;
  width?: string;
  height?: string;
}

// Initial Data
export interface IData {
  products: Array<IProduct> | [];
  career: Array<ICareer> | [];
  testimonial: Array<ITestimonial> | [];
}
