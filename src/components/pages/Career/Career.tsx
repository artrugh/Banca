import React, { Component } from "react";
import { IPropsData } from "../../../common/interfaces";
import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate";

class Career extends Component<IPropsData> {
  public constructor(props: IPropsData) {
    super(props);
  }

  public render(): JSX.Element {
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
