import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  value: PropTypes.string,
  rightLabel: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

const defaultProps = {
  children: null,
  name: undefined,
  value: undefined,
  rightLabel: undefined,
  disabled: false,
  checked: undefined,
};

class Switch extends Component {
  render() {
    const {
      className,
      children,
      name,
      value,
      rightLabel,
      disabled,
      checked,
      ...rest
    } = this.props;

    const classes = classNames("form-switch", className);

    return (
      <label className={classes}>
        <input
          {...rest}
          type="checkbox"
          name={name}
          value={value}
          disabled={disabled}
          checked={checked}
        />
        <span className="form-switch-icon"></span>
        <span>{children}</span>
        {rightLabel && <span>{rightLabel}</span>}
      </label>
    );
  }
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
