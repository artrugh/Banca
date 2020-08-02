import React, { Component, ReactNode } from "react";
import classNames from "classnames";

import { InputTypes, Iclasses, IPropsInput } from "../../../common/interfaces";
import FormLabel from "../../atoms/FormLabel/FormLabel";
import FormHint from "../../atoms/FormHint/FormHint";

const DefaultProps: IPropsInput = {
  children: null,
  label: "",
  labelHidden: false,
  type: InputTypes.text,
  name: undefined,
  status: "",
  disabled: false,
  required: false,
  value: undefined,
  formGroup: null,
  hasIcon: null,
  size: "",
  placeholder: "",
  rows: 3,
  hint: null,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Input extends Component<IPropsInput> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IPropsInput) {
    super(props);
  }

  private get classes(): Iclasses {
    const { formGroup, hasIcon, size, status, className } = this.props;

    const outerClasses = classNames(
      formGroup &&
        formGroup !== "" &&
        (formGroup === "desktop" ? "form-group-desktop" : "form-group"),
      hasIcon && hasIcon !== "" && "has-icon-" + hasIcon
    );

    const innerClasses = classNames(
      "form-input",
      size && `form-input-${size}`,
      status && `form-${status}`,
      className
    );

    return { outerClasses, innerClasses };
  }

  public render(): JSX.Element {
    const {
      id,
      className,
      children,
      label,
      labelHidden,
      type,
      name,
      status,
      disabled,
      value,
      formGroup,
      hasIcon,
      size,
      placeholder,
      rows,
      hint,
      ...rest
    } = this.props;

    const C: InputTypes.textarea | InputTypes.input =
      type === "textarea" ? InputTypes.textarea : InputTypes.input;

    return (
      <>
        {label && (
          <FormLabel labelHidden={labelHidden} id={id}>
            {label}
          </FormLabel>
        )}
        <div className={this.classes.outerClasses}>
          <C
            {...rest}
            type={type !== "textarea" ? type : null}
            className={this.classes.innerClasses}
            name={name}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            rows={type === "textarea" ? rows : null}
          />
          {children}
        </div>
        {hint && <FormHint status={status}>{hint}</FormHint>}
      </>
    );
  }
}

export default Input;
