import React, { Component } from "react";

import { IHeader } from "../../../common/interfaces";

import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate";
import Form from "../../organisms/Form/Form";

interface IProps {
  data: { header: IHeader };
}

class Contact extends Component<IProps> {
  public constructor(props: IProps) {
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
        <Form />
      </SectionTemplate>
    );
  }
}

export default Contact;
