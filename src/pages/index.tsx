import React, { Component } from "react";
import { GetStaticProps } from "next";

import { readFile } from "../helpers/ReadFile";
import Home from "../components/pages/Home/Home";

import { IinitialData, IPropsData } from "../common/interfaces";

export default class HomePage extends Component<IPropsData> {
  public constructor(props: IPropsData) {
    super(props);
  }

  public render(): JSX.Element {
    const { data, ...rest } = this.props;

    return <Home {...rest} data={data} />;
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const data: IinitialData = JSON.parse(readFile());

  return {
    props: {
      data,
    },
  };
};
