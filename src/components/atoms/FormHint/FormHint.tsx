import React, { ReactNode } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS
import BaseClassesGetter from "../../_base/BaseGetterClasses";
// COMMON
import { Iclasses } from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS

export interface IProps {
  children: Partial<ReactNode>;
  status?: string | boolean;
  className?: string;
}
export const DefaultProps: IProps = {
  children: null,
  status: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class FormHint<P extends IProps = IProps, S = {}> extends BaseClassesGetter<P, S> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: P) {
    super(props);
  }

  public get classes(): Iclasses {
    const { className, status } = this.props;
    const classes = classNames("form-hint", status && `text-color-${status}`, className);

    return { classes };
  }

  public render(): JSX.Element {
    const { children, className, status, ...rest } = this.props;

    return (
      <div {...rest} className={this.classes.classes}>
        {children}
      </div>
    );
  }
}

export default FormHint;
