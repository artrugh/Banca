import React, { Component } from "react";
import classNames from "classnames";

class ButtonGroup extends Component {
  render() {
    const { className, ...rest } = this.props;
    return <div {...rest} className={classNames("button-group", className)} />;
  }
}

export default ButtonGroup;
