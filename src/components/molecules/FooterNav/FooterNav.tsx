import React, { Component } from "react";
import Link from "next/link";
import classNames from "classnames";

interface IProps {
  className?: string;
  [propName: string]: any;
}

class FooterNav extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { className, ...rest } = this.props;

    return (
      <nav {...rest} className={classNames("footer-nav", className)}>
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
              <a>FAQs</a>
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
