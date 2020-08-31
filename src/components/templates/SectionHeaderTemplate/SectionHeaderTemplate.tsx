import React, { Component, ReactNode } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  DefaultP,
  IPropsClasses,
  IPropsOuter,
  IPropsInner,
} from "../../../common/interfacesProps";
import { Headings, Env } from "../../../common/enums";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS
import SectionHeader from "../../molecules/SectionHeader/SectionHeader";

export interface IProps extends IPropsOuter, IPropsInner {
  children?: ReactNode;
  id?: string;
  sectionName: string;
  sectionHeaderData: { title: string; paragraph: string };
  containerSize?: string;
  padding?: string;
  tag?: Headings;
  className?: string;
  sectionHeadingPaddingMargin?: string;
  config?: { title: number[]; paragraph?: number[] };
}

export const DefaultProps: IProps = {
  ...DefaultP,
  sectionName: "section",
  sectionHeaderData: {
    title: "Hey You, write a title here!",
    paragraph: "you are missing a huge description about my session",
  },
  tag: Headings.h1,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class SectionTemplate extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IProps) {
    super(props);

    if (process.env.NODE_ENV === Env.prod) {
      checkLenghPropsData.check(
        this.props.sectionHeaderData,
        this.props.config
      );
    }
  }

  public get classes(): IPropsClasses {
    const {
      containerSize,
      sectionName,
      className,
      topOuterDivider,
      bottomOuterDivider,
      sectionHeadingPaddingMargin,
      hasBgColor,
      invertColor,
      topDivider,
      bottomDivider,
      padding,
    } = this.props;

    const containerClasses = classNames(
      containerSize ? `container-${containerSize}` : "container"
    );

    const outerClasses = classNames(
      `${sectionName} section`,
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color"
    );

    const innerClasses = classNames(
      `${sectionName}-inner section-inner`,
      padding && `${padding}`,
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const sectionHeader = classNames("center-content", className && className);

    return { outerClasses, innerClasses, containerClasses, sectionHeader };
  }

  public render(): JSX.Element {
    const {
      containerSize,
      sectionName,
      className,
      sectionHeadingPaddingMargin,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      padding,
      sectionHeaderData,
      children,
      tag,
      id,
      ...rest
    } = this.props;

    return (
      <section {...rest} className={this.classes.outerClasses} id={id}>
        <div className={this.classes.containerClasses}>
          <div className={this.classes.innerClasses}>
            <SectionHeader
              tag={tag}
              data={sectionHeaderData}
              className={this.classes.sectionHeader}
              sectionHeadingPaddingMargin={sectionHeadingPaddingMargin}
            />
            {children}
          </div>
        </div>
      </section>
    );
  }
}

export default SectionTemplate;
