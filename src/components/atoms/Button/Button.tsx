import React, { Component, createElement } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses, IPropsButton } from "../../../common/interfacesProps";
import { Sizes } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

const DefaultProps: IPropsButton = {
  tag: "button",
  color: "",
  size: Sizes.sm,
  children: "click",
  loading: false,
  wide: false,
  wideMobile: false,
  disabled: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Button extends Component<IPropsButton> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IPropsButton) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const {
      color,
      size,
      reveal,
      loading,
      wide,
      wideMobile,
      className,
    } = this.props;

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

    const props = {
      className: this.classes.classesButton,
      children,
      disabled,
      ...rest,
    };

    return (
      <div className={this.classes.classesContainer} data-reveal-delay={200}>
        {this.createReactElement(tag, props)}
      </div>
    );
  }
}

export default Button;
