import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses, IPropsButton } from "../../../common/interfacesProps";
import { Sizes, Positions } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

interface IProps {
  className?: string;
  containerClass?: string;
  containerSize?: Sizes;
  position?: Positions;
}

const DefaultProps: IProps = {
  position: Positions.right,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

export default class Arrow extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IProps) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const { className, containerClass, containerSize, position } = this.props;

    const container = classNames(
      "arrow-container",
      containerSize && `container-${containerSize}`,
      containerClass && containerClass
    );

    const arrow = classNames(className && className, "arrow", position);

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
