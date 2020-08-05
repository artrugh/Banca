import React from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { Iclasses } from "../../../common/interfaces";
import { Iitem } from "../../../common/dataInterfaces";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS
import Image from "../../atoms/Image/Image";
import BaseClassesGetter from "../../../helpers/BaseGetterClasses";

interface IProps extends Iitem {
  imageFill?: boolean;
}
class SplitItem<P extends IProps = IProps, S = {}> extends BaseClassesGetter<
  P,
  S
> {
  public constructor(public props: P) {
    super(props);
    checkLenghPropsData.check(this.props.item, this.props.settings);
  }

  public get classes(): Iclasses {
    const { imageFill } = this.props;
    const classes = classNames(
      "split-item-image center-content-mobile reveal-from-bottom",
      imageFill && "split-item-image-fill"
    );

    return { classes };
  }

  public render(): JSX.Element {
    const { title, subtitle, description, image, alt } = this.props.item;
    const { i } = this.props;

    return (
      <div className="split-item">
        <div
          className="split-item-content center-content-mobile reveal-from-left"
          data-reveal-container=".split-item"
          data-reveal-delay={`${i * 200}`}
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
