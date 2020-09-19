import React, { Component, ReactNode } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  DefaultP,
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
      <section
        {...rest}
        className={cn(`${id} section`, bgColor, {
          "has-top-divider": topOuterDivider,
          "has-bottom-divider": bottomOuterDivider,
          "invert-color": invertColor,
        })}
        id={id}
      >
        <div
          className={cn("container", {
            [`container-${containerSize}`]: containerSize,
          })}
        >
          <div
            className={cn(`${id}-inner section-inner`, {
              [`${padding}`]: padding,
              "has-top-divider": topDivider,
              "has-bottom-divider": bottomDivider,
            })}
          >
            <SectionHeader
              tag={tag}
              data={sectionHeaderData}
              className={cn("center-content", className)}
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
