import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses } from "../../../common/interfacesProps";
import { IItem } from "../../../common/interfaces";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS
import Image from "../../atoms/Image/Image";

interface IProps extends IItem {
  imageFill?: boolean;
  config: {
    title: number[];
    subtitle: number[];
    description: number[];
  };
}
class SplitItem extends Component<IProps> {
  public constructor(public props: IProps) {
    super(props);
    checkLenghPropsData.check(this.props.item, this.props.config);
  }

  public get classes(): IPropsClasses {
    const { imageFill } = this.props;
    const classes = classNames(
      "split-item-image center-content-mobile reveal-from-bottom",
      imageFill && "split-item-image-fill"
    );

    return { classes };
  }

  public render(): JSX.Element {
    const { title, subtitle, description, image, alt } = this.props.item;
    const { delay } = this.props;

    return (
      <div className="split-item">
        <div
          className="split-item-content center-content-mobile reveal-from-left"
          data-reveal-container=".split-item"
          data-reveal-delay={`${delay * 200}`}
        >
          <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
            {subtitle}
          </div>
          <h3 className="mt-0 mb-12">{title}</h3>
          <p className="m-0">{description}</p>
        </div>
        <div
          className={this.classes.classes}
          data-reveal-container=".split-item"
        >
          <Image src={`./images/${image}`} alt={alt} width={528} height={396} />
        </div>
      </div>
    );
  }
}

export default SplitItem;
