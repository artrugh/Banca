import React, { Component } from "react";
import { GetStaticProps } from "next";

// STYLE

// BASE CLASS

// COMMON
import { IinitialData, IPropsData } from "../../common/dataInterfaces";
// HELPERS
import { readFile } from "../../helpers/ReadFile";
// UTILS

// COMPONENTS
import Career from "../../components/pages/Career/Career";

export default class CareerPage extends Component<IPropsData> {
  private constructor(props: IPropsData) {
    super(props);
  }

  public render(): JSX.Element {
    const { data } = this.props;

    return <Career data={data} />;
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
