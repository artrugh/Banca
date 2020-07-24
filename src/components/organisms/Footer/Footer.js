import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./../../atoms/Logo/Logo";
import FooterNav from "./../../molecules/FooterNav/FooterNav";
import FooterSocial from "./../../molecules/FooterSocial/FooterSocial";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

class Footer extends Component {
  render() {
    const { className, topOuterDivider, topDivider, ...rest } = this.props;
    const classes = classNames(
      "site-footer center-content-mobile",
      topOuterDivider && "has-top-divider",
      className
    );
    return (
      <footer {...rest} className={classes}>
        <div className="container">
          <div
            className={classNames(
              "site-footer-inner",
              topDivider && "has-top-divider"
            )}
          >
            <div className="footer-top space-between text-xxs">
              <Logo />
              <FooterSocial />
            </div>
            <div className="footer-bottom space-between text-xxs invert-order-desktop">
              <FooterNav />
              <div className="footer-copyright">
                Made by <a href="https://cruip.com">Cruip</a>. All right
                reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
