import React, { Component, ReactNode, createElement } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { Headings } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

interface IProps {
  data: {
    title?: string;
    paragraph?: string;
  };
  children?: Partial<ReactNode>;
  tag: Headings;
  className?: string;
  sectionHeadingPaddingMargin?: string;
}

const DefaultProps: IProps = {
  data: {
    title: "Hey You, write a title here!",
    paragraph: "you are missing a huge description about my session",
  },
  tag: Headings.h1,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class SectionHeader extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IProps) {
    super(props);
    this.checkLengthPropsData(this.props.data);
  }

  private checkLengthPropsData = (data: {
    title?: string;
    paragraph?: string;
  }): void | never => {
    const { title, paragraph } = data;

    if (title && title.length < 4) {
      throw new Error("Check title length!");
    }

    if (paragraph && paragraph.length < 20) {
      throw new Error("Check paragraph length!");
    }
  };

  private createReactElement = (tag: string, props: {}): JSX.Element => {
    const e = createElement;
    const el: JSX.Element = e(tag, props);

    return el;
  };

  public render(): JSX.Element {
    const {
      className,
      data,
      children,
      sectionHeadingPaddingMargin,
      tag,
      ...rest
    } = this.props;
    const { title, paragraph } = this.props.data;

    const props = {
      className: cn("heading mt-0", data.paragraph ? "mb-16" : "mb-0"),
      children: title,
      ...rest,
    };

    return (
      <>
        {(title || paragraph) && (
          <div
            {...rest}
            className={cn(
              "section-header",
              className,
              sectionHeadingPaddingMargin
            )}
          >
            <div className="container-xs">
              {children}
              {title && this.createReactElement(tag, props)}
              {paragraph && <p className="m-0">{paragraph}</p>}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default SectionHeader;
