import React, { Component } from "react";
import Image from "../../atoms/Image/Image";

// STYLE

// BASE CLASS

// COMMON
import { Iitem } from "../../../common/dataInterfaces";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS

class TilesItem extends Component<Iitem> {
  public constructor(props: Iitem) {
    super(props);
    checkLenghPropsData.check(this.props.item, this.props.settings);
  }

  public render(): JSX.Element {
    const { title, description, icon, alt } = this.props.item;
    const { i } = this.props;

    return (
      <div
        className="tiles-item reveal-from-bottom"
        data-reveal-delay={`${i * 200}`}
      >
        <div className="tiles-item-inner">
          <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
              <Image
                src={`./images/${icon}`}
                alt={alt}
                width={64}
                height={64}
              />
            </div>
          </div>
          <div className="features-tiles-item-content">
            <h4 className="mt-0 mb-8">{title}</h4>
            <p className="m-0 text-sm">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TilesItem;
