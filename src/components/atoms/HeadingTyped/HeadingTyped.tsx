import React, { Component, createElement, ReactNode } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
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
      className: cn({
        [classNameHeading]: classNameHeading,
        "has-cleaner": hasCleaner,
      }),
      "data-typed-speed": dataTypedSpeed,
      "data-str": dataStr,
      "data-typed-delay": dataTypedDelay,
      children: isTyped ? "" : children,
    };

    return (
      <div
        {...rest}
        className={cn({
          [`container-${containerSize}`]: containerSize,
          [className]: className,
        })}
      >
        {this.createReactElement(tag, props)}
        {underlineSize && (
          <hr
            className={cn("underline", scrollPosition, {
              "underline-has-animation": animation,
              [`underline--${underlineSize}`]: underlineSize,
            })}
          />
        )}
        {children}
      </div>
    );
  }
}

export default HeadingTyped;
