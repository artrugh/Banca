import React, { Component } from "react";
import Link from "next/link";

import classNames from "classnames";
import Image from "./../Image/Image";

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, ...rest } = this.props;
    const classes = classNames("brand", className);
    return (
      <div {...rest} className={classes}>
        <h1 className="m-0">
          <Link href="/">
            <a>
              <Image src="/images/logo.svg" alt="Open" width={32} height={32} />
            </a>
          </Link>
        </h1>
      </div>
    );
  }
}

export default Logo;