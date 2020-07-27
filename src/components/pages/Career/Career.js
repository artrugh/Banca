import React, { Component } from "react";

import SectionTemplate from "./../../templates/SectionTemplate/SectionTemplate";

class Career extends Component {
  render() {
    const { career, ...rest } = this.props.data;
    return (
      <SectionTemplate
        {...rest}
        sectionName="career"
        sectionHeaderData={career.header}
        bottomOuterDivider
      >
        Children
      </SectionTemplate>
    );
  }
}

export default Career;
