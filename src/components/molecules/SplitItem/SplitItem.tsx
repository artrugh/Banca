import React, { Component, ReactNode } from "react";
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
  animationHover?: boolean;
  imageFill?: boolean;
  config: { [key: string]: number[] };
}

const DefaultProps: IProps = {
  imageFill: false,
  animationHover: false,
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
    const { imageFill, underline, animationHover } = this.props;

    const container = classNames("split-item mb-32");

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

    const imageContainer = classNames(
      animationHover && "has-animation-hover",
      "logo-tec-container mr-12 mt-32",
      "has-inline-flex"
    );

    return { image, description, container, imageContainer };
  }

  private anchorElement(
    obj: { [key: string]: string },
    textColor: string
  ): JSX.Element | null {
    if (Object.values(obj)[0] === undefined) {
      return null;
    }

    const anchorClassName = `text-xxs text-color-${textColor} fw-600 tt-u mr-24`;
    const anchor = (
      <div className="mb-8">
        <a href={Object.values(obj)[0]} target="_blank" rel="noreferrer">
          <span className={anchorClassName}>{Object.keys(obj)[0]}</span>
        </a>
      </div>
    );

    return anchor;
  }

  private pElement(
    obj: { [key: string]: string | boolean },
    textColor: string
  ): JSX.Element | null {
    if (Object.values(obj)[0] === undefined) {
      return null;
    }

    const pClassName = `mb-8 text-xxs text-color-${textColor} fw-600 tt-u mr-24`;
    let p: JSX.Element;

    if (Object.values(obj)[0] === false) {
      p = <p className={pClassName}>in progress</p>;

      return p;
    }

    if (Object.values(obj)[0] === true) {
      p = <p className={pClassName}>launched</p>;

      return p;
    }

    p = <p className={pClassName}>{Object.values(obj)[0]}</p>;

    return p;
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
      tectools,
    } = this.props.item;

    const { delay } = this.props;

    const listTectools: ReactNode[] | [] = tectools.map((tool: string) => (
      <Image
        src={`/images/logo-tec/logo_tec-${tool}-light.svg`}
        alt={`logo-${tool}`}
        width="30px"
        height="30px"
        key={Math.random()}
        containerClassName={this.classes.imageContainer}
        className="logo-tec-icon"
      />
    ));

    return (
      <div className={this.classes.container}>
        <div
          className={this.classes.description}
          data-reveal-container=".split-item"
          data-reveal-delay={`${delay * 200}`}
        >
          <div className="links has-inline-flex">
            {this.pElement({ status }, "primary")}
            {this.anchorElement({ link }, "secondary")}
            {this.anchorElement({ repository }, "secondary")}
          </div>
          {this.pElement({ subtitle }, "high")}
          <h3 className="mt-12 mb-12">{title}</h3>
          <p className="m-0 mb-32">{description}</p>
          <div className="logo-tec-box">{listTectools}</div>
        </div>
        <div className={this.classes.image} data-reveal-container=".split-item">
          <a href={link} target="_blank" rel="noreferrer">
            <Image src={`./images/products/${image}`} alt={alt} width={528} />
          </a>
        </div>
      </div>
    );
  }
}

export default SplitItem;
