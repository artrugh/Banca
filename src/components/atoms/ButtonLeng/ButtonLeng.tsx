import React, { Component } from "react";

type Props = {
  id: string;
};

class ButtonLeng extends Component<Props> {
  public constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <a>
        <input id={this.props.id} type="checkbox" className="button-checkbox" />
        <label htmlFor={this.props.id} className="button-checkbox-label">
          {"<"}
        </label>
      </a>
    );
  }
}

export default ButtonLeng;
