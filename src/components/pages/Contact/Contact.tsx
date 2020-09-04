import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON

// HELPERS

// UTILS

// COMPONENTS
import SectionTemplate from "../../templates/SectionHeaderTemplate/SectionHeaderTemplate";
import Form from "../../organisms/Form/Form";
// DATA_CONFIG
import { contactForm } from "../../../data/staticData/staticDataContact";
import { contactHeading } from "../../../data/staticData/staticDataHeadings";

// CONFIG
import { contactConfig } from "../../../config/configData";

class Contact extends Component<{}> {
  public render(): JSX.Element {
    return (
      <>
        <div
          id="scroll-behavior-header-nav-color"
          className="loaded-none page"
        />
        <SectionTemplate
          sectionHeaderData={contactHeading}
          containerSize="xs"
          bottomOuterDivider
          config={contactConfig.heading}
          id="contact"
        >
          <Form data={contactForm} />
        </SectionTemplate>
      </>
    );
  }
}

export default Contact;
