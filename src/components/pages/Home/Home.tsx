import React, { Component } from "react";

// DATA
import { tiles } from "../../../data/staticData";
// STYLE

// BASE CLASS

// COMMON
import { IPropsData } from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import Hero from "../../organisms/Hero/Hero";
import FeaturesTiles from "../../organisms/FeaturesTiles/FeaturesTiles";
import FeaturesSplit from "../../organisms/FeaturesSplit/FeaturesSplit";
import FeaturesTestimonial from "../../organisms/FeaturesTestimonial/FeaturesTestimonial";
import Cta from "../../organisms/Cta/Cta";

export default class Home extends Component<IPropsData> {
  private constructor(public readonly props: IPropsData) {
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
        <FeaturesTestimonial data={testimonial} topDivider pushLeft />
        <Cta split />
      </>
    );
  }
}
