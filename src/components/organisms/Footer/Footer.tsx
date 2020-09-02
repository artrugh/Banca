import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses } from "../../../common/interfacesProps";
// HELPERS

// UTILS

// COMPONENTS
import Logo from "../../atoms/Logo/Logo";
import FooterSocial from "../../molecules/FooterSocial/FooterSocial";
import Nav from "../../molecules/Nav/Nav";

interface IProps {
  pathname?: string;
  topOuterDivider?: boolean;
  topDivider?: boolean;
  className?: string;
}

const DefaultProps: IProps = {
  topOuterDivider: false,
  topDivider: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Footer extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IProps) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const { className, topOuterDivider, topDivider } = this.props;
    const outerClasses = classNames(
      "site-footer center-content-mobile",
      topOuterDivider && "has-top-divider",
      className
    );

    const innerClasses = classNames(
      "site-footer-inner",
      topDivider && "has-top-divider"
    );

    return { outerClasses, innerClasses };
  }

  public render(): JSX.Element {
    const {
      className,
      pathname,
      topOuterDivider,
      topDivider,
      ...rest
    } = this.props;

    return (
      <footer {...rest} className={this.classes.outerClasses}>
        <div className="container">
          <div className={this.classes.innerClasses}>
            <div className="footer-top space-between text-xxs">
              <Logo pathname={pathname} footer />
              <FooterSocial />
            </div>
            <div className="footer-bottom space-between text-xxs invert-order-desktop">
              <nav className="footer-nav">
                <ul className="list-reset">
                  <Nav />
                </ul>
              </nav>
              <div className="footer-copyright">
                Made by{" "}
                <a
                  href="https://github.com/artrugh"
                  target="_blank"
                  rel="noreferrer"
                >
                  Arturo Rugh
                </a>
                {` © 2020`}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
