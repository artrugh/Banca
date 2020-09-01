import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON

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
          id="scroll-behavior-hero-statement-color-pages"
          className="loaded-none"
        />
        <FeatureTilesTemplate
          data={tec}
          heading={tecHeading}
          config={tecConfig.heading}
          sectionHeadingPaddingMargin="p-0"
          hasBgColor
          id="tec-tools"
        >
          <Image
            className="m-48"
            containerClassName="images-item-container p-32"
          />
        </FeatureTilesTemplate>
      </>
    );
  }
}

export default Tec;
