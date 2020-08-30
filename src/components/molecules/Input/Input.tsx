import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses, IPropsInput } from "../../../common/interfacesProps";
import { InputTypes, Size } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import FormLabel from "../../atoms/FormLabel/FormLabel";
import FormHint from "../../atoms/FormHint/FormHint";

const DefaultProps: IPropsInput = {
  children: null,
  label: "",
  labelHidden: false,
  type: InputTypes.text,
  status: "",
  disabled: false,
  required: false,
  formGroup: null,
  hasIcon: null,
  size: Size.sm,
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

  public get classes(): IPropsClasses {
    const { formGroup, reveal, hasIcon, size, status, className } = this.props;

    const containerClasses = classNames(
      "input-container--main",
      reveal && reveal
    );

    const outerClasses = classNames(
      "input-container--sub",
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

    return { containerClasses, outerClasses, innerClasses };
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
      <div className={this.classes.containerClasses} data-reveal-delay={200}>
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
      </div>
    );
  }
}

export default Input;
