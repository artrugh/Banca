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
import { tec } from "../../../data/staticData";
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
          config={tecConfig.header}
          sectionHeaderPaddingMargin="p-0"
          hasBgColor
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

export default Tec;
