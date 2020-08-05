import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IPropsData } from "../../../common/dataInterfaces";
// HELPERS

// UTILS

// COMPONENTS
import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate";

class Career extends Component<IPropsData> {
  private constructor(props: IPropsData) {
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
