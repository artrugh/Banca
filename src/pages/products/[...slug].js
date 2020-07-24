import React, { Component } from "react";
import { withRouter } from "next/router";

class Product extends Component {
  constructor(props) {
    super(props);
    this.query = props.router.query;
  }
  render() {
    const productName = this.props.router.query.slug;
    if (productName) return <div>{productName[0]}</div>;
    else return <div>searching product...</div>;
  }
}

export default withRouter(Product);
