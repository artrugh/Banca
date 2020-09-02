import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses } from "../../../common/interfacesProps";
// HELPERS

// UTILS

// COMPONENTS

type Props = {
  dataOn: string;
  dataOff: string;
  id: string;
  className?: string;
};

class ButtonLanguage extends Component<Props> {
  public constructor(props: Props) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const { className } = this.props;

    const label = classNames("button-checkbox-label", className && className);

    return { label };
  }

  public render(): JSX.Element {
    const { id, dataOn, dataOff, className } = this.props;

    return (
      <a>
        <input id={id} type="checkbox" className="button-checkbox" />
        <label
          htmlFor={id}
          className={this.classes.label}
          data-off={dataOff}
          data-on={dataOn}
        >
          {" "}
        </label>
      </a>
    );
  }
}

export default ButtonLanguage;
