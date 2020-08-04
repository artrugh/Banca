import React, { Component } from "react";

import { tiles } from "../../../data/staticData";
import { IPropsData } from "../../../common/interfaces";

import Hero from "../../organisms/Hero/Hero";
import FeaturesTiles from "../../organisms/FeaturesTiles/FeaturesTiles";
import FeaturesSplit from "../../organisms/FeaturesSplit/FeaturesSplit";
import Testimonial from "../../organisms/Testimonial/Testimonial";
import Cta from "../../organisms/Cta/Cta";

export default class Home extends Component<IPropsData> {
  private constructor(props: IPropsData) {
    super(props);
  }

  public render(): JSX.Element {
    const { split, testimonial } = this.props.data;

    return (
      <>
        <Hero className="illustration-section-01" />
        <FeaturesTiles data={tiles} padding="pt-0" />
        <FeaturesSplit
          invertMobile
          topDivider
          imageFill
          className="illustration-section-02"
          data={split}
        />
        <Testimonial data={testimonial} topDivider pushLeft />
        <Cta split />
      </>
    );
  }
}
