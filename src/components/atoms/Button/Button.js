import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  color: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
  wide: PropTypes.bool,
  wideMobile: PropTypes.bool,
  disabled: PropTypes.bool,
};

const defaultProps = {
  tag: "button",
  color: "",
  size: "",
  loading: false,
  wide: false,
  wideMobile: false,
  disabled: false,
};

class Button extends Component {
  render() {
    const {
      color,
      size,
      loading,
      wide,
      wideMobile,
      className,
      disabled,
      tag,
      ...rest
    } = this.props;

    const classes = classNames(
      "button",
      color && `button-${color}`,
      size && `button-${size}`,
      loading && "is-loading",
      wide && "button-block",
      wideMobile && "button-wide-mobile",
      className
    );
    const Component = tag;
    return <Component {...rest} className={classes} disabled={disabled} />;
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
