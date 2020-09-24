import React, { Component } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { Logo, Color, Size } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import Icon from "../../atoms/Icon/Icon";
import FooterSocial from "../../molecules/FooterSocial/FooterSocial";
import Nav from "../../molecules/Nav/Nav";
import SmoothScroll from "../../atoms/SmoothScroll/SmoothScroll";

interface IProps {
  logoName?: Logo;
  logoColor?: Color;
  logoSize?: Size;
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

  public render(): JSX.Element {
    const {
      className,
      pathname,
      topOuterDivider,
      topDivider,
      logoName,
      logoColor,
      logoSize,
      ...rest
    } = this.props;

    return (
      <footer
        {...rest}
        className={cn("site-footer center-content-mobile", className, {
          "has-top-divider": topOuterDivider,
        })}
      >
        <div className="container">
          <div
            className={cn("site-footer-inner", {
              "has-top-divider": topDivider,
            })}
          >
            <div className="footer-top space-between text-xxs">
              <SmoothScroll to="main">
                <Icon name={logoName} color={logoColor} size={logoSize} />
              </SmoothScroll>
              <FooterSocial />
            </div>
            <div className="footer-bottom space-between text-xxs invert-order-desktop">
              <nav className="footer-nav">
                <ul className="list-reset">
                  <Nav />
                </ul>
              </nav>
              <div className="footer-copyright">
                <a
                  href="https://github.com/artrugh"
                  target="_blank"
                  rel="noreferrer"
                >
                  Banca
                </a>
                {` © 2020 - Madrid, España`}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
