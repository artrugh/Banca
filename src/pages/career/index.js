import React, { Component } from "react";

import { readFile } from "./../../helpers/ReadFile";
import Career from "./../../components/pages/Career/Career";

export default class CareerPage extends Component {
  render() {
    const { data } = this.props;
    return <Career data={data} />;
  }
}

export async function getStaticProps() {
  const data = JSON.parse(readFile());
  return {
    props: {
      data,
    },
  };
}
