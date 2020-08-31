import React, { Component } from "react";
import { GetStaticProps } from "next";

// STYLE

// BASE CLASS

// COMMON
import { ICareer } from "../../common/interfaces";
// HELPERS
import { readFile } from "../../helpers/ReadFile";
// UTILS

// COMPONENTS
import Career from "../../components/pages/Career/Career";

interface IProps {
  careers: Array<ICareer> | [];
}
export default class CareerPage extends Component<IProps> {
  private constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <Career {...this.props} />;
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const careers: Array<ICareer> | [] = JSON.parse(readFile("career"));

  return {
    props: {
      careers,
    },
  };
};
