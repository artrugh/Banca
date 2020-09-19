import React, { Children, cloneElement, Component } from "react";
import NextLink from "next/link";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
import { ReactElementLike } from "prop-types";
import cn from "classnames";

interface LinkProps extends WithRouterProps {
  href: string;
  children: ReactElementLike;
  activeClassName: string;
}

class Link<P extends LinkProps> extends Component<P> {
  public constructor(props: P) {
    super(props);
  }

  public render(): any {
    const {
      router,
      children,
      // className,
      href,
      activeClassName,
      ...rest
    } = this.props;

    const child = Children.only(children);
    const active = this.props.router.pathname === href && activeClassName;
    const { className } = child.props;

    return (
      <NextLink href={this.props.href} {...rest}>
        {cloneElement(child, {
          className: cn(className, child.props.className, {
            [activeClassName]: active,
          }),
        })}
      </NextLink>
    );
  }
}

export default withRouter(Link);
