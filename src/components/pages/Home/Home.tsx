import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IPropsData } from "../../../common/interfaces";
import { Sizes, ItemType } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import FeatureTilesTemplate from "../../templates/FeatureTilesTemplate/FeatureTilesTemplate";
import Hero from "../../organisms/Hero/Hero";
import HeroScrollable from "../../organisms/HeroScrollable/HeroScrollable";
import FeaturesTiles from "../../organisms/FeaturesTiles/FeaturesTiles";
import FeaturesSplit from "../../organisms/FeaturesSplit/FeaturesSplit";
import FeaturesTestimonial from "../../organisms/FeaturesTestimonial/FeaturesTestimonial";
import FeaturesKeyboard from "../../organisms/FeaturesKeyboard/FeaturesKeyboard";
import Cta from "../../organisms/Cta/Cta";
// DATA
import { client, tec, tiles } from "../../../data/staticData";
// CONFIG_DATA
import {
  careerConfig,
  tilesConfig,
  clientsConfig,
  tecConfig,
} from "../../../config/configData";

export default class Home extends Component<IPropsData> {
  private constructor(public readonly props: IPropsData) {
    super(props);
  }

  public render(): JSX.Element {
    const { split, testimonial, career } = this.props.data;

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
        <FeatureTilesTemplate
          data={tiles}
          config={tilesConfig}
          padding="pt-0"
          underline="has-center-underline"
          itemType={ItemType.tilesItem}
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
        <FeatureTilesTemplate
          data={client}
          config={clientsConfig}
          itemType={ItemType.imagesItem}
          sectionHeaderPaddingMargin="p-0"
        />
        <FeatureTilesTemplate
          className="illustration-section-02"
          config={careerConfig}
          data={career}
          itemType={ItemType.keyboardItem}
          underline="has-center-underline"
        />
        <FeatureTilesTemplate
          data={tec}
          config={tecConfig}
          itemType={ItemType.imagesItem}
          sectionHeaderPaddingMargin="p-0"
        />
      </>
    );
  }
}
