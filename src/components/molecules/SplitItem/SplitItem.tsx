import React, { Component } from "react";
import classNames from "classnames";

import Image from "../../atoms/Image/Image";

import { IsplitDataItem, Iclasses } from "../../../common/interfaces";

class SplitItem extends Component<IsplitDataItem> {
  public constructor(props: IsplitDataItem) {
    super(props);
  }

  private get classes(): Iclasses {
    const { imageFill } = this.props;
    const classes = classNames(
      "split-item-image center-content-mobile reveal-from-bottom",
      imageFill && "split-item-image-fill"
    );

    return { classes };
  }

  public render(): JSX.Element {
    const { title, subtitle, description, image, alt } = this.props;

    return (
      <div className="split-item">
        <div
          className="split-item-content center-content-mobile reveal-from-left"
          data-reveal-container=".split-item"
        >
          <div className="text-xxs text-color-primary fw-600 tt-u mb-8">{subtitle}</div>
          <h3 className="mt-0 mb-12">{title}</h3>
          <p className="m-0">{description}</p>
        </div>
        <div className={this.classes.classes} data-reveal-container=".split-item">
          <Image src={image} alt={alt} width={528} height={396} />
        </div>
      </div>
    );
  }
}

export default SplitItem;
