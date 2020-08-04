import React, { Component } from "react";
import { withRouter, SingletonRouter } from "next/router";

interface IProps {
  router: SingletonRouter;
  // children?: ReactNode;
  pageTitle?: string;
  [index: string]: any;
}

class Position extends Component<IProps> {
  public constructor(props: IProps) {
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
