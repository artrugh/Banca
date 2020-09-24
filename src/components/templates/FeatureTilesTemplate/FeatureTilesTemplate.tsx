import React, { Component, cloneElement, ReactElement, ReactNode } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { DefaultP, IPropsFeatureItem } from "../../../common/interfacesProps";
import { Headings, BgColor } from "../../../common/enums";
import {
  IProduct,
  ICareer,
  ITestimonial,
  ITech,
  ITile,
  IClient,
} from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import SectionTemplate from "../SectionHeaderTemplate/SectionHeaderTemplate";

interface IProps extends IPropsFeatureItem {
  children?: ReactNode | ReactElement;
  data: Array<IProduct | ITestimonial | ICareer | ITech | ITile | IClient | []>;
  config?: {
    title: number[];
    paragraph?: number[];
  };
}

const DefaultProps: IProps = {
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

  public get Items(): JSX.Element[] {
    const { bgColor, data, children } = this.props;

    let bgColorLogo: string;

    if (
      bgColor === BgColor.darkHigh ||
      bgColor === BgColor.darkMedium ||
      bgColor === BgColor.darkLow
    ) {
      bgColorLogo = "light";
    } else {
      bgColorLogo = "dark";
    }

    const Items: JSX.Element[] = data.map((item: { [key: string]: any }) => {
      return cloneElement(children as ReactElement<any>, {
        item,
        key: Math.random(),
        src: `${item.src}${item.name}-${bgColorLogo}.svg`,
        alt: "logo-" + item.name,
        name: item.name,
        width: item.width,
        height: item.height,
        size: item.size,
      });
    });

    return Items;
  }

  public render(): JSX.Element {
    const {
      id,
      data,
      heading,
      bgColor,
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

    return (
      <SectionTemplate
        {...rest}
        sectionHeaderData={heading}
        tag={Headings.h2}
        config={config}
        className={className}
        bgColor={bgColor}
        sectionHeadingPaddingMargin={sectionHeadingPaddingMargin}
        id={id}
      >
        <div
          className={cn(wrapName, {
            "push-left": pushLeft,
            "invert-mobile": invertMobile,
            "invert-desktop": invertDesktop,
            "align-top": alignTop,
          })}
        >
          {this.Items}
        </div>
      </SectionTemplate>
    );
  }
}

export default FeaturesTilesTemplate;
