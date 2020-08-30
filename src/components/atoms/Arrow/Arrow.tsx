import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses } from "../../../common/interfacesProps";
import { Size, Positions, Color } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

interface IProps {
  className?: string;
  containerClass?: string;
  color?: Color;
  containerSize?: Size;
  position?: Positions;
}

const DefaultProps: IProps = {
  position: Positions.right,
  color: Color.light,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

export default class Arrow extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IProps) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const {
      className,
      containerClass,
      containerSize,
      position,
      color,
    } = this.props;

    const container = classNames(
      "arrow-container",
      containerSize && `container-${containerSize}`,
      containerClass && containerClass
    );

    const arrow = classNames(
      className && className,
      color && `arrow-${color}`,
      "arrow",
      position
    );

    return { container, arrow };
  }

  public render(): JSX.Element {
    return (
      <div className={this.classes.container}>
        <i className={this.classes.arrow} />
      </div>
    );
  }
}
