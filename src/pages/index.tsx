import React, { Component } from "react";
import { GetStaticProps } from "next";

// STYLE

// BASE CLASS

// COMMON
import { IInitialData, IPropsData } from "../common/interfaces";
// HELPERS
import { readFile } from "../helpers/ReadFile";
// UTILS

// COMPONENTS
import Home from "../components/pages/Home/Home";

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
  const data: IInitialData = JSON.parse(readFile());

  return {
    props: {
      data,
    },
  };
};
