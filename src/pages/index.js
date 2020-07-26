import React, { Component } from "react";

import { readFile } from "./../helpers/ReadFile";
import Home from "./../components/pages/Home/Home";

export default class HomePage extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <Home data={data} />
      </>
    );
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
