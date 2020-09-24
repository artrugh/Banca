import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IProduct } from "../../../common/interfaces";
import { Underline, BgColor, UnderlineRounded } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import FeatureTilesTemplate from "../../templates/FeatureTilesTemplate/FeatureTilesTemplate";
import SplitItem from "../../molecules/SplitItem/SplitItem";
// DATA
import { productsHeading } from "../../../data/staticData/staticDataHeadings";
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
          id="scroll-behaviour-header-nav-color"
          className="loaded-none page"
        />
        <FeatureTilesTemplate
          data={products}
          heading={productsHeading}
          invertMobile
          config={splitConfig.heading}
          wrapName="split-wrap"
          id="products"
          bgColor={BgColor.darkLow}
        >
          <SplitItem
            delay={0}
            imageFill
            config={splitConfig.items}
            underline={Underline.centerUnderline}
            underlineRounded={UnderlineRounded.underlineRoundedRight}
            animationHover
            bgColor={BgColor.darkLow}
          />
        </FeatureTilesTemplate>
      </>
    );
  }
}

export default Products;
