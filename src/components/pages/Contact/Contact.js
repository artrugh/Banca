import React, { Component } from "react";

import Checkbox from "./../../atoms/Checkbox/Checkbox";
import Radio from "./../../atoms/Radio/Radio";
import Select from "./../../atoms/Select/Select";
import SmoothScroll from "./../../atoms/SmoothScroll/SmoothScroll";
import Switch from "./../../atoms/Switch/Switch";

class Contact extends Component {
  render() {
    return (
      <>
        <Checkbox />
        <Radio name = "RADIO">RADIO</Radio>
        <Select>SELECT</Select>
        <SmoothScroll to="/">SMOOTHSCROLL</SmoothScroll>
        <Switch>SWITCH</Switch>
      </>
    );
  }
}

export default Contact;
