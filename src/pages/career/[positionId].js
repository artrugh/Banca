import React, { Component } from "react";
import { withRouter } from "next/router";

class Position extends Component {
  constructor(props) {
    super(props);
    this.query = props.router.query;
  }
  render() {
    const positionName = this.props.router.query.positionId;
    const name = this.props.router.query.name;
    return (
      <>
        <div>{positionName}</div>
        {name && <div>{name}</div>}
      </>
    );
  }
}

export default withRouter(Position);
