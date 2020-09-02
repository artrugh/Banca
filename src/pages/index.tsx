import React, { Component } from "react";
import { GetStaticProps } from "next";

// STYLE

// BASE CLASS

// COMMON
import { IProduct, ICareer, ITestimonial, IData } from "../common/interfaces";
// HELPERS
import { readFile } from "../helpers/ReadFile";
// UTILS

// COMPONENTS
import Home from "../components/pages/Home/Home";

export default class HomePage extends Component<IData> {
  public constructor(props: IData) {
    super(props);
  }

  public render(): JSX.Element {
    return <Home {...this.props} />;
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const products: Array<IProduct> | [] = await JSON.parse(readFile("products"));
  const careers: Array<ICareer> | [] = await JSON.parse(readFile("career"));
  const testimonial: Array<ITestimonial> | [] = await JSON.parse(
    readFile("testimonial")
  );

  return {
    props: {
      products,
      careers,
      testimonial,
    },
  };
};
