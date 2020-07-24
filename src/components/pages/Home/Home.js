import React, { Component } from "react";

import Hero from "./../../organisms/Hero/Hero";
import FeaturesTiles from "./../../organisms/FeaturesTiles/FeaturesTiles";
import FeaturesSplit from "./../../organisms/FeaturesSplit/FeaturesSplit";
import Testimonial from "./../../organisms/Testimonial/Testimonial";
import Cta from "./../../organisms/Cta/Cta";

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero className="illustration-section-01" />
        <FeaturesTiles />
        <FeaturesSplit
          invertMobile
          topDivider
          imageFill
          className="illustration-section-02"
        />
        <Testimonial topDivider />
        <Cta split />
      </>
    );
  }
}
