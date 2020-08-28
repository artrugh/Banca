import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IPropsData } from "../../../common/interfaces";
import { Sizes, ItemType, ItemBgDark, Underline } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import FeatureTilesTemplate from "../../templates/FeatureTilesTemplate/FeatureTilesTemplate";
import HeroScrollable from "../../organisms/HeroScrollable/HeroScrollable";
import FeaturesSplit from "../../organisms/FeaturesSplit/FeaturesSplit";
import Cta from "../../organisms/Cta/Cta";
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
        <HeroScrollable
          className="reveal-scale-down"
          containerSize={Sizes.big}
          underlineSize={Sizes.big}
          height="100vh"
        >
          We combine our tecnical expertise with know-how.
        </HeroScrollable>
        <FeatureTilesTemplate
          hasBgColor
          data={tiles}
          config={tilesConfig}
          underline={Underline.centerUnderline}
          itemType={ItemType.tilesItem}
        />
        <FeaturesSplit
          invertMobile
          imageFill
          className="illustration-section-02"
          data={split}
          config={splitConfig}
          underline={Underline.centerUnderline}
        />
        <FeatureTilesTemplate
          data={testimonial}
          config={testimonialConfig}
          itemType={ItemType.testimonialItem}
          underline={Underline.centerUnderline}
          hasBgColor
          pushLeft
          itemBgDark={ItemBgDark.medium}
        />
        <FeatureTilesTemplate
          data={client}
          config={clientsConfig}
          itemType={ItemType.imagesItem}
          sectionHeaderPaddingMargin="p-0"
        />
        <Cta split itemBgDark={ItemBgDark.medium} color="secondary" />
        <FeatureTilesTemplate
          className="illustration-section-02"
          config={careerConfig}
          data={career}
          itemType={ItemType.keyboardItem}
          underline={Underline.centerUnderline}
        />
        <FeatureTilesTemplate
          data={tec}
          config={tecConfig}
          itemType={ItemType.imagesItem}
          sectionHeaderPaddingMargin="p-0"
          hasBgColor
        />
      </>
    );
  }
}
