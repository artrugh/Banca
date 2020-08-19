import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IPropsData } from "../../../common/interfaces";
import { Underline } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

import FeaturesSplit from "../../organisms/FeaturesSplit/FeaturesSplit";

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
        <FeaturesSplit
          invertMobile
          imageFill
          className="illustration-section-02"
          data={split}
          config={splitConfig}
          underline={Underline.centerUnderline}
        />
      </>
    );
  }
}

export default Products;
