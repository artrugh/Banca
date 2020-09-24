import React, { Component } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { Color, Env, Size } from "../../../common/enums";
import { IPropsItem } from "../../../common/interfacesProps";
// HELPERS

// UTILS
import checkLengthPropsData from "../../../utils/checkLengthPropsData";
// COMPONENTS
import Icon from "../../atoms/Icon/Icon";

interface IProps extends IPropsItem {
  iconColor?: Color;
  iconSize?: Size;
  strokeColor?: Color;
  circleColor?: Color;
  ellipseColor?: Color;
  config: { [key: string]: number[] };
}

class TilesItem extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);

    if (process.env.NODE_ENV === Env.dev) {
      checkLengthPropsData.check(this.props.item, this.props.config);
    }
  }

  public render(): JSX.Element {
    const { title, description, icon, alt } = this.props.item;
    const {
      delay,
      iconColor,
      iconSize,
      strokeColor,
      circleColor,
      ellipseColor,
      bgColor,
      underline,
      underlineRounded,
      density,
    } = this.props;

    return (
      <div
        className={cn("tiles-item reveal-from-bottom m-24", bgColor)}
        data-reveal-delay={`${delay * 200}`}
      >
        <div className="tiles-item-inner">
          <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
              <Icon
                name={icon}
                color={iconColor}
                size={iconSize}
                strokeColor={strokeColor}
                circleColor={circleColor}
                ellipseColor={ellipseColor}
              />
            </div>
          </div>
          <div className="features-tiles-item-content">
            <h4
              className={cn("heading mt-0 mb-8", underline, underlineRounded)}
              data-density={density}
            >
              {title}
            </h4>
            <p className="m-0 text-sm">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TilesItem;
