import React, { Component } from "react";
import classNames from "classnames";

import { SectionSplitProps } from "../../../utils/SectionProps";

import SectionTemplate from "./../../templates/SectionTemplate/SectionTemplate";
import SplitItem from "../../molecules/SplitItem/SplitItem";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

class FeaturesSplit extends Component {
  render() {
    const {
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      data,
      ...rest
    } = this.props;

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    const Items = data.items.map((item, i) => (
      <SplitItem
        key={i}
        title={item.title}
        subTitle={item.subtitle}
        description={item.description}
        image={`./images/${item.image}`}
        alt={item.alt}
        imageFill={imageFill}
      />
    ));

    return (
      <SectionTemplate
        {...rest}
        sectionName="features-split"
        sectionHeaderData={data.header}
      >
        <div className={splitClasses}>{Items}</div>
      </SectionTemplate>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
