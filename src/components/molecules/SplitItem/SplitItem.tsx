import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses } from "../../../common/interfacesProps";
import { IItem } from "../../../common/interfaces";
import { Env } from "../../../common/enums";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS
import Image from "../../atoms/Image/Image";

interface IProps extends IItem {
  imageFill?: boolean;
  underline?: string;
  config: {
    title: number[];
    subtitle: number[];
    description: number[];
  };
}
class SplitItem extends Component<IProps> {
  public constructor(public props: IProps) {
    super(props);

    if (process.env.NODE_ENV === Env.prod) {
      checkLenghPropsData.check(this.props.item, this.props.config);
    }
  }

  public get classes(): IPropsClasses {
    const { imageFill, underline } = this.props;

    const container = classNames("split-item mb-0");

    const image = classNames(
      "split-item-image center-content-mobile reveal-from-bottom",
      imageFill && "split-item-image-fill"
    );

    const description = classNames(
      "split-item-content center-content-mobile reveal-from-left",
      underline && underline
    );

    return { image, description, container };
  }

  public render(): JSX.Element {
    const { title, subtitle, description, image, alt } = this.props.item;
    const { delay } = this.props;

    return (
      <div className={this.classes.container}>
        <div
          className={this.classes.description}
          data-reveal-container=".split-item"
          data-reveal-delay={`${delay * 200}`}
        >
          <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
            {subtitle}
          </div>
          <h3 className="mt-0 mb-12">{title}</h3>
          <p className="m-0">{description}</p>
        </div>
        <div className={this.classes.image} data-reveal-container=".split-item">
          <Image src={`./images/${image}`} alt={alt} width={528} height={396} />
        </div>
      </div>
    );
  }
}

export default SplitItem;
