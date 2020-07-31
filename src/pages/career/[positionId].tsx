import React, { Component } from "react";
import { withRouter } from "next/router";

class Position extends Component<any> {
  public constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    const positionName = this.props.router.query?.positionId as string;
    const name = this.props.router.query?.name as string;

    return (
      <>
        <div>{positionName}</div>
        {name && <div>{name}</div>}
      </>
    );
  }
}

export default withRouter(Position);
