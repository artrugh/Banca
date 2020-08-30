import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IPropsData } from "../../../common/interfaces";
import { Underline } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import FeatureTilesTemplate from "../../templates/FeatureTilesTemplate/FeatureTilesTemplate";
import KeyboardItem from "../../molecules/KeyboardItem/KeyboardItem";

// CONFIG
import { careerConfig } from "../../../config/configData";

class Career extends Component<IPropsData> {
  private constructor(props: IPropsData) {
    super(props);
  }

  public render(): JSX.Element {
    const { career } = this.props.data;

    return (
      <>
        <div
          id="scroll-behavior-hero-statement-color-pages"
          className="loaded-none"
        />
        <FeatureTilesTemplate
          className="illustration-section-02"
          config={careerConfig.header}
          data={career}
        >
          <KeyboardItem
            config={careerConfig.items}
            underline={Underline.centerUnderline}
            delay={0}
          />
        </FeatureTilesTemplate>
      </>
    );
  }
}

export default Career;
