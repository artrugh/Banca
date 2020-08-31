import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses, IPropsItem } from "../../../common/interfacesProps";
import { Env, Underline } from "../../../common/enums";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS
import Image from "../../atoms/Image/Image";

interface IProps extends IPropsItem {
  imageFill?: boolean;
  config: { [key: string]: number[] };
}

const DefaultProps: IProps = {
  imageFill: false,
  config: { title: [25] },
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;
class SplitItem extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
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
      underline === Underline.centerUnderline && "has-center-underline",
      underline === Underline.rightUnderline && "has-right-underline",
      underline === Underline.leftUnderline && "has-left-underline"
    );

    return { image, description, container };
  }

  private anchorElement(
    obj: { [key: string]: string },
    textColor: string
  ): JSX.Element | null {
    if (Object.values(obj)[0] === undefined) {
      return null;
    }

    const anchorClassName = `text-xxs text-color-${textColor} fw-600 tt-u`;
    const anchor = (
      <div className="mb-8">
        <a href={Object.values(obj)[0]} target="_blank" rel="noreferrer">
          <span className={anchorClassName}>{Object.keys(obj)[0]}</span>
        </a>
      </div>
    );

    return anchor;
  }

  private divElement(
    obj: { [key: string]: string | boolean },
    textColor: string
  ): JSX.Element | null {
    if (Object.values(obj)[0] === undefined) {
      return null;
    }

    const divClassName = `mb-8 text-xxs text-color-${textColor} fw-600 tt-u`;
    let div: JSX.Element;

    if (Object.values(obj)[0] === false) {
      div = <div className={divClassName}>in progress</div>;

      return div;
    }

    if (Object.values(obj)[0] === true) {
      div = <div className={divClassName}>launched</div>;

      return div;
    }

    div = <div className={divClassName}>{Object.values(obj)[0]}</div>;

    return div;
  }

  public render(): JSX.Element {
    const {
      title,
      subtitle,
      description,
      image,
      alt,
      status,
      link,
      repository,
    } = this.props.item;

    const { delay } = this.props;

    return (
      <div className={this.classes.container}>
        <div
          className={this.classes.description}
          data-reveal-container=".split-item"
          data-reveal-delay={`${delay * 200}`}
        >
          {this.divElement({ status }, "high")}
          {this.divElement({ subtitle }, "primary")}
          {this.anchorElement({ link }, "primary")}
          {this.anchorElement({ repository }, "primary")}
          <h3 className="mt-12 mb-12">{title}</h3>
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
