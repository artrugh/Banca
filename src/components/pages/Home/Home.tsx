import React, { Component } from "react";

// DATA
import { tiles } from "../../../data/staticData";
// STYLE

// BASE CLASS

// COMMON
import { IPropsData } from "../../../common/interfaces";
import { Sizes } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import Hero from "../../organisms/Hero/Hero";
import HeroScrollable from "../../organisms/HeroScrollable/HeroScrollable";
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
        {/* <Hero className="illustration-section-01" /> */}
        <HeroScrollable
          src="https://media.nationalgeographic.org/assets/photos/000/266/26660.jpg"
          alt="mountains"
          className="reveal-scale-down"
          containerSize={Sizes.big}
          underlineSize={Sizes.big}
          height="100vh"
        >
          We combine our tecnical expertise with know-how.
        </HeroScrollable>
        <FeaturesTiles
          data={tiles}
          padding="pt-0"
          underline="has-center-underline"
        />
        <FeaturesSplit
          invertMobile
          topDivider
          imageFill
          className="illustration-section-02"
          data={split}
          underline="has-center-underline"
        />
        <FeaturesTestimonial data={testimonial} topDivider pushLeft />
        <Cta split />
      </>
    );
  }
}
