import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IItem } from "../../../common/interfaces";
import { Env } from "../../../common/enums";
import { IPropsClasses } from "../../../common/interfacesProps";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS
import Image from "../../atoms/Image/Image";

interface IProps extends IItem {
  underline: string;
  config: { [key: string]: number[] };
  itemBgDark?: boolean;
}

class TilesItem extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);

    if (process.env.NODE_ENV === Env.prod) {
      checkLenghPropsData.check(this.props.item, this.props.config);
    }
  }

  public get classes(): IPropsClasses {
    const { underline, itemBgDark } = this.props;
    const heading = classNames(
      "mt-0 mb-8",
      underline && underline,
      itemBgDark && "text-color-high"
    );
    const container = classNames(
      "tiles-item reveal-from-bottom",
      itemBgDark && "has-bg-dark m-24"
    );

    const parragraph = classNames(
      "m-0 text-sm",
      itemBgDark && "text-color-high"
    );

    return { heading, container, parragraph };
  }

  public render(): JSX.Element {
    const { title, description, icon, alt } = this.props.item;
    const { delay } = this.props;

    return (
      <div
        className={this.classes.container}
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
            <h4 className={this.classes.heading}>{title}</h4>
            <p className={this.classes.parragraph}>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TilesItem;
