import React, { Component } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsItem } from "../../../common/interfacesProps";
import { Env } from "../../../common/enums";
// HELPERS

// UTILS
import checkLengthPropsData from "../../../utils/checkLengthPropsData";
// COMPONENTS
import Image from "../../atoms/Image/Image";

interface IProps extends IPropsItem {
  centerDivider?: boolean;
  quote?: boolean;
  config: { [key: string]: number[] };
}

class TestimonialItem extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);

    if (process.env.NODE_ENV === Env.dev) {
      checkLengthPropsData.check(this.props.item, this.props.config);
    }
  }

  public render(): JSX.Element {
    const { name, testimony, company, avatar } = this.props.item;
    const {
      delay,
      bgColor,
      underline,
      underlineRounded,
      density,
      centerDivider,
      quote,
    } = this.props;

    return (
      <div
        className={cn(
          "tiles-item testimonial-item reveal-from-right m-24",
          bgColor
        )}
        data-reveal-delay={`${delay * 200}`}
      >
        <div className="tiles-item-inner">
          {avatar && (
            <Image
              className="testimonial-item-avatar"
              classNameContainer={cn(
                "testimonial-item-avatar-container",
                underline,
                underlineRounded,
                {
                  "has-center-divider": centerDivider,
                }
              )}
              src={avatar}
              alt={name}
              width="32%"
              height="32%"
              density={density}
            />
          )}
          <div
            className={cn("testimonial-item-content mt-12", {
              "has-center-underline": underline,
              "ta-c": !underline,
              "has-quote": quote,
            })}
          >
            <p className="text-sm mb-0">{testimony}</p>
          </div>
          <div className="testimonial-item-footer text-xs mt-32 mb-0">
            <span className="testimonial-item-name">{name}</span>
            <span className="text-color-low"> / </span>
            <span className="testimonial-item-link">
              <a href="#0">{company}</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialItem;
