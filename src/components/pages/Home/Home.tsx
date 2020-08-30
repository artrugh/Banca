import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IPropsData } from "../../../common/interfaces";
import { Size, ItemBgDark, Underline, Color } from "../../../common/enums";
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
import { client, tec, tiles } from "../../../data/staticData";
// CONFIG_DATA
import {
  careerConfig,
  tilesConfig,
  clientsConfig,
  tecConfig,
  testimonialConfig,
  splitConfig,
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
        {/* <HeroTyped hasCleaner /> */}
        <HeroScrollable
          className="reveal-scale-down"
          containerSize={Size.big}
          underlineSize={Size.big}
          height="100vh"
        />
        <FeatureTilesTemplate
          hasBgColor
          data={tiles}
          config={tilesConfig.header}
          id="tiles"
        >
          <TilesItem
            config={tilesConfig.items}
            underline={Underline.centerUnderline}
            delay={0}
          />
        </FeatureTilesTemplate>
        <FeatureTilesTemplate
          invertMobile
          className="illustration-section-02"
          data={split}
          config={splitConfig.header}
          wrapName="split-wrap"
          id="products"
        >
          <SplitItem
            delay={0}
            imageFill
            config={splitConfig.items}
            underline={Underline.centerUnderline}
          />
        </FeatureTilesTemplate>

        <FeatureTilesTemplate
          data={testimonial}
          config={testimonialConfig.header}
          hasBgColor
          pushLeft
          id="testimonies"
        >
          <TestimonialItem
            underline={Underline.centerUnderline}
            config={testimonialConfig.items}
            itemBgDark={ItemBgDark.medium}
            delay={0}
          />
        </FeatureTilesTemplate>
        <FeatureTilesTemplate
          data={client}
          config={clientsConfig.header}
          sectionHeaderPaddingMargin="p-0"
          id="clients"
        >
          <Image
            className="p-32"
            containerClassName="images-item-container p-32"
          />
        </FeatureTilesTemplate>
        <Cta split itemBgDark={ItemBgDark.medium} color={Color.secondary} />
        <FeatureTilesTemplate
          className="illustration-section-02"
          config={careerConfig.header}
          data={career}
          id="careers"
        >
          <KeyboardItem
            config={careerConfig.items}
            underline={Underline.centerUnderline}
            delay={0}
          />
        </FeatureTilesTemplate>
        <FeatureTilesTemplate
          data={tec}
          config={tecConfig.header}
          sectionHeaderPaddingMargin="p-0"
          hasBgColor
          id="tec"
        >
          <Image
            className="p-32"
            containerClassName="images-item-container p-32"
          />
        </FeatureTilesTemplate>
      </>
    );
  }
}
