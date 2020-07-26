import React, { Component } from "react";

import Checkbox from "./../../atoms/Checkbox/Checkbox";
import Radio from "./../../atoms/Radio/Radio";
import Select from "./../../atoms/Select/Select";
import SmoothScroll from "./../../atoms/SmoothScroll/SmoothScroll";
import Switch from "./../../atoms/Switch/Switch";

class Career extends Component {
  render() {
    return (
      <div>
        <Checkbox />
        <Radio name="RADIO">RADIO</Radio>
        <Select>SELECT</Select>
        <SmoothScroll to="/">SMOOTHSCROLL</SmoothScroll>
        <Switch>SWITCH</Switch>
      </div>
    );
  }
}

export default Career;
