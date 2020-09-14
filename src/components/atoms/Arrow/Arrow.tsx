import React, { Component } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses } from "../../../common/interfacesProps";
import { Size, Color, Icons } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import Icon from "../Icon/Icon";

interface IProps {
  className?: string;
  containerClass?: string;
  containerSize?: Size;
  color?: Color;
  iconColor?: Color;
  iconSize?: Size;
  strokeColor?: Color;
}

const DefaultProps: IProps = {
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
      // position,
      color,
    } = this.props;

    const container = cn(
      "chevron-container",
      containerSize && `container-${containerSize}`,
      containerClass && containerClass
    );

    const arrow = cn(
      className && className,
      // color && `arrow-${color}`,
      "arrow"
      // position
    );

    return { container, arrow };
  }

  public render(): JSX.Element {
    const { color, containerClass, containerSize } = this.props;

    return (
      <div
        className={cn({
          [`container-${containerSize}`]: containerSize,
          [containerClass]: containerClass,
        })}

        // {this.classes.container}
      >
        <Icon
          className={this.classes.arrow}
          name={Icons.chevron}
          color={color}
        />
        {/* <i className={this.classes.arrow} /> */}
      </div>
    );
  }
}
