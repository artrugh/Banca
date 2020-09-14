import React, { Component, ReactNode } from "react";
import cn from "classnames";

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
      <div {...rest} className={cn("button-group", { [className]: className })}>
        {children}
      </div>
    );
  }
}

export default ButtonGroup;
