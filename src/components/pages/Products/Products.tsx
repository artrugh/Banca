import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IPropsData } from "../../../common/interfaces";
import { Underline } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

import FeaturesTilesTemplate from "../../templates/FeatureTilesTemplate/FeatureTilesTemplate";
import SplitItem from "../../molecules/SplitItem/SplitItem";

// DATA

// CONFIG_DATA
import { splitConfig } from "../../../config/configData";

class Products extends Component<IPropsData> {
  private constructor(public readonly props: IPropsData) {
    super(props);
  }

  public render(): JSX.Element {
    const { split } = this.props.data;

    return (
      <>
        <div
          id="scroll-behavior-hero-statement-color-pages"
          className="loaded-none"
        />
        <FeaturesTilesTemplate
          invertMobile
          className="illustration-section-02"
          data={split}
          config={splitConfig.header}
          wrapName="split-wrap"
        >
          <SplitItem
            delay={0}
            imageFill
            config={splitConfig.items}
            underline={Underline.centerUnderline}
          />
        </FeaturesTilesTemplate>
      </>
    );
  }
}

export default Products;
