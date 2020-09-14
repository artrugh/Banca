import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { BgColor } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import FeatureTilesTemplate from "../../templates/FeatureTilesTemplate/FeatureTilesTemplate";
import Image from "../../atoms/Image/Image";
// DATA
import { tec } from "../../../data/staticData/staticDataTec";
import { tecHeading } from "../../../data/staticData/staticDataHeadings";
// DATA_CONFIG
import { tecConfig } from "../../../config/configData";

class Tec extends Component {
  public render(): JSX.Element {
    return (
      <>
        <div
          id="scroll-behaviour-header-nav-color"
          className="loaded-none page"
        />
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
            classNameContainer="images-item-container p-32"
            animationHover
          />
        </FeatureTilesTemplate>
      </>
    );
  }
}

export default Tec;
