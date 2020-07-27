import React, { Component } from "react";

import SectionTemplate from "./../../templates/SectionTemplate/SectionTemplate";
import Form from "./../../organisms/Form/Form";

class Contact extends Component {
  render() {
    const { data, ...rest } = this.props;

    return (
      <SectionTemplate
        {...rest}
        sectionName="contact"
        sectionHeaderData={data.header}
        containerSize="xs"
        bottomOuterDivider
      >
        <Form/>
      </SectionTemplate>
    );
  }
}

export default Contact;
