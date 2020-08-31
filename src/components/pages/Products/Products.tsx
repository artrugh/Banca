import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IProduct } from "../../../common/interfaces";
import { Underline } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import FeaturesTilesTemplate from "../../templates/FeatureTilesTemplate/FeatureTilesTemplate";
import SplitItem from "../../molecules/SplitItem/SplitItem";
// DATA
import { productsHeading } from "../../../data/staticDataHeadings";
// CONFIG_DATA
import { splitConfig } from "../../../config/configData";

interface IProps {
  products: Array<IProduct> | [];
}
class Products extends Component<IProps> {
  private constructor(public readonly props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { products } = this.props;

    return (
      <>
        <div
          id="scroll-behavior-hero-statement-color-pages"
          className="loaded-none"
        />
        <FeaturesTilesTemplate
          data={products}
          heading={productsHeading}
          config={splitConfig.heading}
          invertMobile
          className="illustration-section-02"
          wrapName="split-wrap"
          id="products"
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
