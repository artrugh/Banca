import React, { Component, ReactNode } from "react";
import classNames from "classnames";

import { Iclasses } from "../../../common/interfaces";

export interface IProps {
  children?: ReactNode;
  labelHidden?: boolean;
  id: string | null;
  [propName: string]: any;
}

export const DefaultProps: IProps = {
  children: null,
  labelHidden: false,
  id: `${Math.random()}`,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class FormLabel extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IProps) {
    super(props);
  }

  private get classes(): Iclasses {
    const { className, labelHidden } = this.props;
    const classes = classNames("form-label", labelHidden && "screen-reader", className);

    return { classes };
  }

  public render(): JSX.Element {
    const { className, children, labelHidden, id, ...rest } = this.props;

    return (
      <label {...rest} className={this.classes.classes} htmlFor={id}>
        {children}
      </label>
    );
  }
}
export default FormLabel;
