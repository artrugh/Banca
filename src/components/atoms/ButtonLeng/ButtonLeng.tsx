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
  id: string;
  className?: string;
};

class ButtonLeng extends Component<Props> {
  public constructor(props: Props) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const { className } = this.props;

    const label = classNames("button-checkbox-label", className && className);

    return { label };
  }

  public render(): JSX.Element {
    return (
      <a>
        <input id={this.props.id} type="checkbox" className="button-checkbox" />
        <label htmlFor={this.props.id} className={this.classes.label}>
          {"<"}
        </label>
      </a>
    );
  }
}

export default ButtonLeng;
