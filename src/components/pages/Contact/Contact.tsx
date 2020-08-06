import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IPropsInput, IPropsButton, Reveal } from "../../../common/interfaces";
import { IFeatureData } from "../../../common/dataInterfaces";
// HELPERS

// UTILS

// COMPONENTS
import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate";
import Form from "../../organisms/Form/Form";

interface IData extends IFeatureData {
  form: { inputs: IPropsInput[]; buttons?: IPropsButton[]; reveal?: Reveal };
}

interface IProps {
  data: IData;
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
        settings={data.settings.header}
      >
        <Form data={data.form} />
      </SectionTemplate>
    );
  }
}

export default Contact;
