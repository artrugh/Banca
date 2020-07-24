import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import FormLabel from "./../FormLabel/FormLabel";
import FormHint from "./../FormHint/FormHint";

const propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  labelHidden: PropTypes.bool,
  name: PropTypes.string,
  status: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string,
  placeholder: PropTypes.string,
  hint: PropTypes.string,
};

const defaultProps = {
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
};

class Select extends Component {
  render() {
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

    const classes = classNames(
      "form-select",
      size && `form-select-${size}`,
      status && `form-${status}`,
      className
    );

    return (
      <>
        {label && (
          <FormLabel labelHidden={labelHidden} id={id}>
            {label}
          </FormLabel>
        )}
        <select
          {...rest}
          className={classes}
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

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
