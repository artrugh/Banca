import React, { Component, ReactNode } from "react";
import classNames from "classnames";

interface IProps {
  className?: string;
  children?: ReactNode;
  [propName: string]: any;
}

class ButtonGroup extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { children, className, ...rest } = this.props;

    return (
      <div {...rest} className={classNames("button-group", className)}>
        {children}
      </div>
    );
  }
}

export default ButtonGroup;
