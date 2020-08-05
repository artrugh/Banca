import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IPropsInput, IPropsButton, Reveal } from "../../../common/interfaces";
import { IHeader } from "../../../common/dataInterfaces";
// HELPERS

// UTILS

// COMPONENTS
import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate";
import Form from "../../organisms/Form/Form";

interface IProps {
  data: {
    header: IHeader;
    form: { inputs: IPropsInput[]; buttons?: IPropsButton[]; reveal?: Reveal };
  };
}

class Contact extends Component<IProps> {
  private constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { data, ...rest } = this.props;

    return (
      <SectionTemplate
        {...rest}
        sectionName="contact"
        sectionHeaderData={data.header}
        containerSize="xs"
        bottomOuterDivider
      >
        <Form data={data.form} />
      </SectionTemplate>
    );
  }
}

export default Contact;
