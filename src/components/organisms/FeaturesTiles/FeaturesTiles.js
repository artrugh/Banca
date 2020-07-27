import React, { Component } from "react";
import classNames from "classnames";

import { SectionTilesProps } from "../../../utils/SectionProps";

import TilesItem from "../../molecules/TilesItem/TilesItem";
import SectionTemplate from "./../../templates/SectionTemplate/SectionTemplate";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

class FeaturesTiles extends Component {
  render() {
    const {
      pushLeft,
      data,
      ...rest
    } = this.props;

    const tilesClasses = classNames(
      "tiles-wrap center-content",
      pushLeft && "push-left"
    );

    const Items = data.items.map((item, i) => (
      <TilesItem
        key={i}
        icon={`./images/${item.icon}`}
        title={item.title}
        description={item.description}
        alt={item.alt}
        delay={`${i * 200}`}
      />
    ));

    return (
      <SectionTemplate
        {...rest}
        sectionName="features-tiles"
        sectionHeaderData={data.header}
      >
        <div className={tilesClasses}>{Items}</div>
      </SectionTemplate>
    );
  }
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
