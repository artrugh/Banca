import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

const defaultProps = {
  children: null,
  name: undefined,
  value: undefined,
  disabled: false,
  checked: undefined,
};

class Checkbox extends Component {
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    console.log(name);
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
      <label className={classNames("form-checkbox", className)}>
        <input
          {...rest}
          type="checkbox"
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

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
