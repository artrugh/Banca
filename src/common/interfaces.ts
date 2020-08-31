export interface ITile {
  title: string;
  description: string;
  icon: string;
  alt: string;
}
// // Products
export interface IProduct {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
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
  src: string;
  alt: string;
  width: string;
  height: string;
}

// Initial Data
export interface IData {
  products: Array<IProduct> | [];
  career: Array<ICareer> | [];
  testimonial: Array<ITestimonial> | [];
}
