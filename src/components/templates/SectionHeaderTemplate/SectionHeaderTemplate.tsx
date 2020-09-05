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
import checkLengthPropsData from "../../../utils/checkLengthPropsData";
// COMPONENTS
import SectionHeader from "../../molecules/SectionHeader/SectionHeader";

interface IProps extends IPropsOuter, IPropsInner {
  children?: ReactNode;
  id: string;
  sectionHeaderData: { title?: string; paragraph?: string };
  containerSize?: string;
  padding?: string;
  tag?: Headings;
  className?: string;
  sectionHeadingPaddingMargin?: string;
  config?: { title: number[]; paragraph?: number[] };
}

const DefaultProps: IProps = {
  ...DefaultP,
  sectionHeaderData: {
    title: "Hey You, write a title here!",
    paragraph: "you are missing a huge description about my session",
  },
  id: "",
  tag: Headings.h1,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class SectionTemplate extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IProps) {
    super(props);

    if (process.env.NODE_ENV === Env.dev) {
      checkLengthPropsData.check(
        this.props.sectionHeaderData,
        this.props.config
      );
    }
  }

  public get classes(): IPropsClasses {
    const {
      id,
      containerSize,
      className,
      topOuterDivider,
      bottomOuterDivider,
      bgColor,
      invertColor,
      topDivider,
      bottomDivider,
      padding,
    } = this.props;

    const containerClasses = classNames(
      containerSize ? `container-${containerSize}` : "container"
    );

    const outerClasses = classNames(
      `${id} section`,
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      bgColor && bgColor,
      invertColor && "invert-color"
    );

    const innerClasses = classNames(
      `${id}-inner section-inner`,
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
      className,
      sectionHeadingPaddingMargin,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      bgColor,
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
