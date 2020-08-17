import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IPropsData } from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import SectionTemplate from "../../templates/SectionHeaderTemplate/SectionHeaderTemplate";
// CONFIG
import { careerConfig } from "../../../config/configData";

class Career extends Component<IPropsData> {
  private constructor(props: IPropsData) {
    super(props);
  }

  public render(): JSX.Element {
    const { data, ...rest } = this.props;

    return (
      <SectionTemplate
        {...rest}
        sectionName="career"
        sectionHeaderData={data.career.header}
        bottomOuterDivider
        config={careerConfig.header}
      >
        Children
      </SectionTemplate>
    );
  }
}

export default Career;
