import React, { Component } from "react";
import classNames from "classnames";

import { SectionTilesProps } from "../../../utils/SectionProps";
import SectionHeader from "./../../molecules/SectionHeader/SectionHeader";
import TilesItem from "../../molecules/TilesItem/TilesItem";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

class FeaturesTiles extends Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      tiles,
      ...rest
    } = this.props;

    const outerClasses = classNames(
      "features-tiles section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "features-tiles-inner section-inner pt-0",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames(
      "tiles-wrap center-content",
      pushLeft && "push-left"
    );

    const sectionHeader = {
      title: "Build up the whole picture",
      paragraph:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
    };
    const Items = tiles.map((item, i) => (
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
      <section {...rest} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>{Items}</div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
