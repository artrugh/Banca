import React, { Component } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON

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

  public render(): JSX.Element {
    const { id, dataOn, dataOff, className } = this.props;

    return (
      <a>
        <input id={id} type="checkbox" className="button-checkbox" />
        <label
          htmlFor={id}
          className={cn("button-checkbox-label", {
            [className]: className,
          })}
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
