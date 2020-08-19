import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IPropsData } from "../../../common/interfaces";
import { ItemType, Underline } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import FeatureTilesTemplate from "../../templates/FeatureTilesTemplate/FeatureTilesTemplate";
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
          config={tecConfig}
          itemType={ItemType.imagesItem}
          sectionHeaderPaddingMargin="p-0"
          hasBgColor
        />
      </>
    );
  }
}

export default Tec;
