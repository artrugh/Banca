import React, { Component, ReactNode } from "react";

interface IProps {
  string: string;
}
class BreakString extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  protected get arrowString(): Array<ReactNode> {
    const arrowString: string[] = this.props.string.split("<br>");
    const items: Array<ReactNode> = arrowString.map((string) => (
      <>
        <span className="has-inline-block mb-24">{string}</span>
        <br />
      </>
    ));

    return items;
  }

  public render(): JSX.Element {
    return <>{this.arrowString}</>;
  }
}

export default BreakString;
