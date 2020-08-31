import React, { Component, cloneElement, ReactElement } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  DefaultP,
  IPropsClasses,
  IPropsFeatureItem,
} from "../../../common/interfacesProps";
import { Headings } from "../../../common/enums";
import {
  IProduct,
  ICareer,
  ITestimonial,
  IImageLogo,
  ITile,
} from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import SectionTemplate from "../SectionHeaderTemplate/SectionHeaderTemplate";

export interface IProps extends IPropsFeatureItem {
  children?: ReactElement;
  data: Array<IProduct | ITestimonial | ICareer | IImageLogo | ITile | []>;
  config?: {
    title: number[];
    paragraph?: number[];
  };
}

export const DefaultProps: IProps = {
  ...DefaultP,
  pushLeft: false,
  wrapName: "tiles-wrap center-content",
  data: [],
  id: "",
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class FeaturesTilesTemplate extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IProps) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const {
      wrapName,
      pushLeft,
      invertMobile,
      invertDesktop,
      alignTop,
    } = this.props;
    const classes = classNames(
      wrapName,
      pushLeft && "push-left",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    return { classes };
  }

  public render(): JSX.Element {
    const {
      id,
      data,
      heading,
      hasBgColor,
      sectionHeadingPaddingMargin,
      className,
      wrapName,
      invertMobile,
      invertDesktop,
      alignTop,
      pushLeft,
      children,
      config,
      ...rest
    } = this.props;

    const Items: JSX.Element[] = data.map((item: { [key: string]: any }) =>
      cloneElement(children, {
        item,
        key: Math.random(),
        src: item.src,
        width: item.width,
        height: item.height,
      })
    );

    return (
      <SectionTemplate
        {...rest}
        sectionHeaderData={heading}
        tag={Headings.h2}
        config={config}
        className={className}
        hasBgColor={hasBgColor}
        sectionHeadingPaddingMargin={sectionHeadingPaddingMargin}
        id={id}
      >
        <div className={this.classes.classes}>{Items}</div>
      </SectionTemplate>
    );
  }
}

export default FeaturesTilesTemplate;
