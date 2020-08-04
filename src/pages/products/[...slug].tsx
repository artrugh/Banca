import React, { Component } from "react";
import { withRouter, SingletonRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface IProps {
  router: SingletonRouter;
  // children?: ReactNode;
  pageTitle?: string;
  [index: string]: any;
}

class Product extends Component<IProps> {
  private query: ParsedUrlQuery = this.props.router.query;
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const productName = this.query.slug;
    const C = productName ? <div>{productName[0]}</div> : <div>Product not defined</div>;

    return C;
  }
}

export default withRouter(Product);
