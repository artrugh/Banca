import React, { Component, ReactNode } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsItem } from "../../../common/interfacesProps";
import { Env, BgColor, Color, IconName, Size } from "../../../common/enums";
// HELPERS

// UTILS
import checkLengthPropsData from "../../../utils/checkLengthPropsData";
// COMPONENTS
import Image from "../../atoms/Image/Image";
import Icon from "../../atoms/Icon/Icon";

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

    if (process.env.NODE_ENV === Env.dev) {
      checkLengthPropsData.check(this.props.item, this.props.config);
    }
  }

  public get imageShadow(): boolean | string {
    let imgShadow: boolean | string = false;
    const { shadow, bgColor } = this.props;

    if (shadow) {
      if (
        bgColor === BgColor.darkHigh ||
        bgColor === BgColor.darkMedium ||
        bgColor === BgColor.darkLow
      ) {
        imgShadow = Color.light;
      } else {
        imgShadow = Color.dark;
      }
    }

    return imgShadow;
  }

  public get listTectools(): ReactNode[] {
    const { tectools } = this.props.item;
    const { bgColor } = this.props;

    let bgColorLogo: string;

    if (
      bgColor === BgColor.darkHigh ||
      bgColor === BgColor.darkMedium ||
      bgColor === BgColor.darkLow
    ) {
      bgColorLogo = Color.light;
    } else {
      bgColorLogo = Color.dark;
    }

    const listTectools: ReactNode[] | [] = tectools?.map((tool: string) => (
      <Icon
        name={IconName[tool]}
        size={Size.lg}
        className="logo-tec-icon p-8"
        key={Math.random()}
      />
    ));

    return listTectools;
  }

  private anchorElement(
    obj: { [key: string]: string },
    textColor: Color
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
    textColor: Color
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
    } = this.props.item;

    const {
      delay,
      imageFill,
      underline,
      underlineRounded,
      density,
      animationHover,
      bgColor,
    } = this.props;

    return (
      <div className={cn("split-item mb-32", bgColor)}>
        <div
          className={cn(
            "split-item-content center-content-mobile reveal-from-left",
            underline,
            underlineRounded
          )}
          data-reveal-container=".split-item"
          data-reveal-delay={`${delay * 200}`}
          data-density={density}
        >
          <div className="links d-inline-flex">
            {this.pElement({ status }, Color.primary)}
            {this.anchorElement({ link }, Color.secondary)}
            {this.anchorElement({ repository }, Color.secondary)}
          </div>
          {this.pElement({ subtitle }, Color.secondary)}
          <h3 className="mt-12 mb-12 heading">{title}</h3>
          <p className="m-0 mb-32">{description}</p>
          <div className="logo-tec-box">{this.listTectools}</div>
        </div>
        <div
          className={cn(
            "split-item-image center-content-mobile reveal-from-bottom",
            { "split-item-image-fill": imageFill }
          )}
          data-reveal-container=".split-item"
        >
          <a href={link} target="_blank" rel="noreferrer">
            <Image
              className={alt.toLowerCase()}
              src={`./images/products/${image}`}
              alt={alt}
              width={528}
              shadow={this.imageShadow}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default SplitItem;
