import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

const defaultProps = {
  children: null,
  name: undefined,
  value: "",
  disabled: false,
  checked: false,
};

class Radio extends Component {
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    return name;
  }
  render() {
    const {
      className,
      children,
      name,
      value,
      disabled,
      checked,
      ...rest
    } = this.props;

    return (
      <label className={classNames("form-radio", className)}>
        <input
          {...rest}
          type="radio"
          name={name}
          value={value}
          disabled={disabled}
          checked={checked}
          onChange={this.handleInputChange}
        />
        {children}
      </label>
    );
  }
}

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
