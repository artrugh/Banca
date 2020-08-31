import React, { Component } from "react";
import { GetStaticProps } from "next";

// STYLE

// BASE CLASS

// COMMON
import { IProduct } from "../../common/interfaces";
// HELPERS
import { readFile } from "../../helpers/ReadFile";
// UTILS

// COMPONENTS
import Products from "../../components/pages/Products/Products";

interface IProps {
  products: Array<IProduct> | [];
}

export default class ProductPage extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <Products {...this.props} />;
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const products: Array<IProduct> | [] = JSON.parse(readFile("products"));

  return {
    props: {
      products,
    },
  };
};
