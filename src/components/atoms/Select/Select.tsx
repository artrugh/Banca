import React, { Component, ReactNode } from "react";
import classNames from "classnames";

import { Iclasses } from "../../../common/interfaces";

import FormLabel from "../FormLabel/FormLabel";
import FormHint from "../FormHint/FormHint";

interface IProps {
  children?: ReactNode;
  label?: string;
  labelHidden?: boolean;
  name?: string;
  status?: string;
  disabled?: boolean;
  value?: string | number;
  size?: string;
  placeholder?: string;
  hint?: string;
  className?: string;
  id: string;
}

const DefaultProps: IProps = {
  children: null,
  label: "",
  labelHidden: false,
  name: undefined,
  status: "",
  disabled: false,
  value: undefined,
  size: "",
  placeholder: null,
  hint: null,
  id: `${Math.random()}`,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Select extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IProps) {
    super(props);
  }

  private get classes(): Iclasses {
    const { className, status, size } = this.props;

    const classes = classNames(
      "form-select",
      size && `form-select-${size}`,
      status && `form-${status}`,
      className
    );

    return { classes };
  }

  public render(): JSX.Element {
    const {
      className,
      children,
      label,
      labelHidden,
      name,
      status,
      disabled,
      value,
      size,
      placeholder,
      hint,
      id,
      ...rest
    } = this.props;

    return (
      <>
        {label && (
          <FormLabel labelHidden={labelHidden} id={id}>
            {label}
          </FormLabel>
        )}
        <select
          {...rest}
          className={this.classes.classes}
          name={name}
          disabled={disabled}
          value={value}
        >
          {placeholder && (
            <option hidden value="">
              {placeholder}
            </option>
          )}
          {children}
        </select>
        {hint && <FormHint status={status}>{hint}</FormHint>}
      </>
    );
  }
}

export default Select;