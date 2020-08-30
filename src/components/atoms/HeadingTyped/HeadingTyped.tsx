import React, { Component, createElement, ReactNode } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses } from "../../../common/interfacesProps";
import {
  Size,
  Headings,
  ScrollPosition,
  DataTypedSpeed,
} from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

interface IProps {
  children?: string | ReactNode;
  containerSize?: Size;
  underlineSize?: Size;
  className?: string;
  animation?: boolean;
  tag?: Headings;
  scrollPosition?: ScrollPosition;
  classNameHeading?: string;
  dataTypedSpeed?: DataTypedSpeed;
  dataStr?: string;
  dataTypedDelay?: number;
  isTyped?: boolean;
  hasCleaner?: boolean;
}

const DefaultProps: IProps = {
  scrollPosition: ScrollPosition.leftRight,
  isTyped: false,
  hasCleaner: false,
  tag: Headings.h1,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class HeadingTyped extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(public props: IProps) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const {
      containerSize,
      underlineSize,
      className,
      animation,
      scrollPosition,
      classNameHeading,
      hasCleaner,
    } = this.props;

    const container = classNames(
      className && className,
      containerSize && `container-${containerSize}`
    );

    const underline = classNames(
      "underline",
      animation && "underline-has-animation",
      underlineSize ? `underline--${underlineSize}` : "",
      scrollPosition
    );

    const heading = classNames(
      classNameHeading && classNameHeading,
      hasCleaner && "has-cleaner"
    );

    return { container, underline, heading };
  }

  private createReactElement = (tag: string, props: {}): JSX.Element => {
    const e = createElement;
    const el: JSX.Element = e(tag, props);

    return el;
  };

  public render(): JSX.Element {
    const {
      tag,
      children,
      containerSize,
      animation,
      underlineSize,
      className,
      classNameHeading,
      scrollPosition,
      dataTypedSpeed,
      dataStr,
      dataTypedDelay,
      isTyped,
      hasCleaner,
      ...rest
    } = this.props;

    const props = {
      className: this.classes.heading,
      "data-typed-speed": dataTypedSpeed,
      "data-str": dataStr,
      "data-typed-delay": dataTypedDelay,
      children: isTyped ? "" : children,
    };

    return (
      <div {...rest} className={this.classes.container}>
        {this.createReactElement(tag, props)}
        {underlineSize && <hr className={this.classes.underline} />}
        {children}
      </div>
    );
  }
}

export default HeadingTyped;
