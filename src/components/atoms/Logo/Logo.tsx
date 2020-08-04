import React, { Component } from "react";
import Link from "next/link";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON

// HELPERS

// UTILS

// COMPONENTS
import Image from "../Image/Image";
import SmoothScroll from "../SmoothScroll/SmoothScroll";

interface IProps {
  pathname?: string;
  className?: string;
  [propName: string]: any;
}

class Logo extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { pathname, className, ...rest } = this.props;

    return (
      <div {...rest} className={classNames("brand", className)}>
        <h1 className="m-0">
          {pathname === "/" ? (
            <SmoothScroll to="hero">
              <Image src="/images/logo.svg" alt="Open" width={32} height={32} />
            </SmoothScroll>
          ) : (
            <Link href="/">
              <a>
                <Image src="/images/logo.svg" alt="Open" width={32} height={32} />
              </a>
            </Link>
          )}
        </h1>
      </div>
    );
  }
}

export default Logo;
