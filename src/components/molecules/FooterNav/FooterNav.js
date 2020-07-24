import React, { Component } from "react";
import classNames from "classnames";
import Link from "next/link";

class FooterNav extends Component {
  render() {
    const { className, ...rest } = this.props;
    const classes = classNames("footer-nav", className);
    return (
      <nav {...rest} className={classes}>
        <ul className="list-reset">
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>FAQ's</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Support</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default FooterNav;
