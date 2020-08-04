import React, { createElement } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS
import BaseClassesGetter from "../../_base/BaseGetterClasses";
// COMMON
import { Iclasses, IPropsButton } from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS

const DefaultProps: IPropsButton = {
  tag: "button",
  color: "",
  size: "",
  children: "click",
  reveal: undefined,
  loading: false,
  wide: false,
  wideMobile: false,
  disabled: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Button<P extends IPropsButton = IPropsButton, S = {}> extends BaseClassesGetter<P, S> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: P) {
    super(props);
  }

  public get classes(): Iclasses {
    const { color, size, reveal, loading, wide, wideMobile, className } = this.props;

    const classesContainer = classNames("button-container", reveal && reveal);

    const classesButton = classNames(
      "button",
      color && `button-${color}`,
      size && `button-${size}`,
      loading && "is-loading",
      wide && "button-block",
      wideMobile && "button-wide-mobile",
      className
    );

    return { classesButton, classesContainer };
  }

  private createReactElement = (tag: string, props: {}): JSX.Element => {
    const e = createElement;
    const el: JSX.Element = e(tag, props);

    return el;
  };

  public render(): JSX.Element {
    const {
      color,
      size,
      loading,
      wide,
      wideMobile,
      disabled,
      tag,
      className,
      children,
      ...rest
    } = this.props;

    const props = { className: this.classes.classesButton, children, disabled, ...rest };

    return (
      <div className={this.classes.classesContainer} data-reveal-delay={200}>
        {this.createReactElement(tag, props)}
      </div>
    );
  }
}

export default Button;
