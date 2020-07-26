import React, { Component } from "react";

import Hero from "./../../organisms/Hero/Hero";
import FeaturesTiles from "./../../organisms/FeaturesTiles/FeaturesTiles";
import FeaturesSplit from "./../../organisms/FeaturesSplit/FeaturesSplit";
import Testimonial from "./../../organisms/Testimonial/Testimonial";
import Cta from "./../../organisms/Cta/Cta";

export default class Home extends Component {
  render() {
    const { split, tiles, testimonial } = this.props.data;

    return (
      <>
        <Hero className="illustration-section-01" />
        <FeaturesTiles tiles={tiles} />
        <FeaturesSplit
          invertMobile
          topDivider
          imageFill
          className="illustration-section-02"
          split={split}
        />
        <Testimonial testimonial={testimonial} topDivider />
        <Cta split />
      </>
    );
  }
}
