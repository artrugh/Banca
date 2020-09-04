import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IData } from "../../../common/interfaces";
import {
  Size,
  BgColor,
  Underline,
  Color,
  CtaButtonType,
} from "../../../common/enums";
import SplitItem from "../../molecules/SplitItem/SplitItem";
// HELPERS

// UTILS

// COMPONENTS
import HeroScrollable from "../../organisms/HeroScrollable/HeroScrollable";
import HeroTyped from "../../organisms/HeroTyped/HeroTyped";
import Hero from "../../organisms/Hero/Hero";
import FeatureTilesTemplate from "../../templates/FeatureTilesTemplate/FeatureTilesTemplate";
import Cta from "../../organisms/Cta/Cta";
// ITEMS
import TilesItem from "../../molecules/TilesItem/TilesItem";
import TestimonialItem from "../../molecules/TestimonialItem/TestimonialItem";
import Image from "../../atoms/Image/Image";
import KeyboardItem from "../../molecules/KeyboardItem/KeyboardItem";
// DATA
import { clients } from "../../../data/staticData/staticDataClients";
import { tec } from "../../../data/staticData/staticDataTec";
import { tiles } from "../../../data/staticData/staticDataTiles";

import {
  productsHeading,
  testimonialHeading,
  clientHeading,
  careerHeading,
  tecHeading,
  tileHeading,
} from "../../../data/staticData/staticDataHeadings";
// CONFIG_DATA
import {
  careerConfig,
  tilesConfig,
  clientsConfig,
  tecConfig,
  testimonialConfig,
  splitConfig,
} from "../../../config/configData";

export default class Home extends Component<IData> {
  private constructor(public readonly props: IData) {
    super(props);
  }

  public render(): JSX.Element {
    const { products, testimonial, careers } = this.props;

    return (
      <>
        <Hero
          className="illustration-section-01"
          bgColor={BgColor.lightHeigh}
        />
        {/* <HeroTyped
          bgColor={BgColor.darkHeigh}
          hasCleaner
          colorArrow={Color.primary}
        /> */}
        {/* <HeroScrollable
          className="reveal-scale-down"
          containerSize={Size.big}
          underlineSize={Size.big}
          height="100vh"
          bgColor={BgColor.lightHeigh}
        /> */}
        <FeatureTilesTemplate
          bgColor={BgColor.lightHeigh}
          data={tiles}
          heading={tileHeading}
          config={tilesConfig.heading}
          id="features-tiles"
        >
          <TilesItem
            config={tilesConfig.items}
            underline={Underline.centerUnderline}
            underlineRounded
            delay={0}
          />
        </FeatureTilesTemplate>
        <FeatureTilesTemplate
          data={products}
          heading={productsHeading}
          invertMobile
          className="illustration-section-02"
          config={splitConfig.heading}
          wrapName="split-wrap"
          id="products"
          bgColor={BgColor.darkHeigh}
        >
          <SplitItem
            delay={0}
            imageFill
            config={splitConfig.items}
            underline={Underline.centerUnderline}
            underlineRounded
            animationHover
            bgColor={BgColor.darkHeigh}
          />
        </FeatureTilesTemplate>

        <FeatureTilesTemplate
          data={testimonial}
          heading={testimonialHeading}
          config={testimonialConfig.heading}
          bgColor={BgColor.lightHeigh}
          id="testimonial"
        >
          <TestimonialItem
            underline={Underline.centerUnderline}
            config={testimonialConfig.items}
            bgColor={BgColor.darkMedium}
            delay={0}
            underlineRounded
          />
        </FeatureTilesTemplate>
        <FeatureTilesTemplate
          data={clients}
          heading={clientHeading}
          config={clientsConfig.heading}
          sectionHeadingPaddingMargin="p-0"
          id="clients"
          bgColor={BgColor.darkHeigh}
        >
          <Image
            className="p-32"
            containerClassName="images-item-container p-32"
          />
        </FeatureTilesTemplate>
        <FeatureTilesTemplate
          data={careers}
          heading={careerHeading}
          className="illustration-section-02"
          config={careerConfig.heading}
          id="careers"
          bgColor={BgColor.lightHeigh}
        >
          <KeyboardItem
            config={careerConfig.items}
            underline={Underline.centerUnderline}
            underlineRounded
            delay={0}
          />
        </FeatureTilesTemplate>
        <FeatureTilesTemplate
          data={tec}
          heading={tecHeading}
          config={tecConfig.heading}
          sectionHeadingPaddingMargin="p-0"
          bgColor={BgColor.lightHeigh}
          id="tec"
        >
          <Image
            className="m-32"
            containerClassName="images-item-container p-32"
            animationHover
          />
        </FeatureTilesTemplate>
        <Cta
          split
          bgColor={BgColor.lightHeigh}
          bgColorBox={BgColor.darkMedium}
          color={Color.secondary}
          buttonType={CtaButtonType.mail}
          mail="arturo.rugh@gmail.com"
          id="cta"
        >
          Get in contact to work together!
        </Cta>
      </>
    );
  }
}
