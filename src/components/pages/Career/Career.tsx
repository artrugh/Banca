import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { ICareer } from "../../../common/interfaces";
import { Underline, BgColor } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import FeatureTilesTemplate from "../../templates/FeatureTilesTemplate/FeatureTilesTemplate";
import KeyboardItem from "../../molecules/KeyboardItem/KeyboardItem";
// DATA_CONFIG
import { careerHeading } from "../../../data/staticData/staticDataHeadings";
// CONFIG
import { careerConfig } from "../../../config/configData";

interface IProps {
  careers: Array<ICareer> | [];
}

class Career extends Component<IProps> {
  private constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { careers } = this.props;

    return (
      <>
        <div
          id="scroll-behavior-hero-statement-color-pages"
          className="loaded-none"
        />
        <FeatureTilesTemplate
          data={careers}
          heading={careerHeading}
          className="illustration-section-02"
          config={careerConfig.heading}
          id="careers"
          bgColor={BgColor.lightHeigh}
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
