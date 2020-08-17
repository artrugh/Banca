import React, { Component } from "react";
import Image from "../../atoms/Image/Image";

// STYLE

// BASE CLASS

// COMMON
import { IItem } from "../../../common/interfaces";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS

interface IProps extends IItem {
  underline: string;
  config: { [key: string]: number[] };
}

class TilesItem extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
    checkLenghPropsData.check(this.props.item, this.props.config);
  }

  public render(): JSX.Element {
    const { title, description, icon, alt } = this.props.item;
    const { delay, underline } = this.props;

    return (
      <div
        className="tiles-item reveal-from-bottom"
        data-reveal-delay={`${delay * 200}`}
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
            <h4 className={`mt-0 mb-8 ${underline && underline}`}>{title}</h4>
            <p className="m-0 text-sm">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TilesItem;
