import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  labelHidden: PropTypes.bool,
  id: PropTypes.string,
};

const defaultProps = {
  children: null,
  labelHidden: false,
  id: null,
};

class FormLabel extends Component {
  render() {
    const { className, children, labelHidden, id, ...rest } = this.props;
    const classes = classNames(
      "form-label",
      labelHidden && "screen-reader",
      className
    );
    return (
      <label {...rest} className={classes} htmlFor={id}>
        {children}
      </label>
    );
  }
}

FormLabel.propTypes = propTypes;
FormLabel.defaultProps = defaultProps;

export default FormLabel;
