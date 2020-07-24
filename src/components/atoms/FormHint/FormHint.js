import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  status: PropTypes.string,
};

const defaultProps = {
  children: null,
  status: false,
};

class FormHint extends Component {
  render() {
    const { children, className, status, ...rest } = this.props;
    const classes = classNames(
      "form-hint",
      status && `text-color-${status}`,
      className
    );
    return (
      <div {...rest} className={classes}>
        {children}
      </div>
    );
  }
}

FormHint.propTypes = propTypes;
FormHint.defaultProps = defaultProps;

export default FormHint;
