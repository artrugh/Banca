import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";
import Logo from "./../../atoms/Logo/Logo";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.nav = createRef();
    this.hamburger = createRef();
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Header getDerivedStateFromProps");
    return state;
  }

  componentDidMount() {
    console.log("Header DidMount");
    this.state.isActive && this.openMenu();
    document.addEventListener("keydown", this.keyPress);
    document.addEventListener("click", this.clickOutside);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Header DidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Header shouldUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Header SnapshotBeforeUpdate");
    return { snapshot: this.state.isActive };
  }

  openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    this.nav.current.style.maxHeight = this.nav.current.scrollHeight + "px";
    this.setState({ isActive: true });
  };

  closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    this.nav.current && (this.nav.current.style.maxHeight = null);
    this.setState({ isActive: false });
  };

  keyPress = (e) => {
    this.state.isActive && e.keyCode === 27 && this.closeMenu();
  };

  clickOutside = (e) => {
    if (!this.nav.current) return;
    if (
      !this.state.isActive ||
      this.nav.current.contains(e.target) ||
      e.target === this.hamburger.current
    ) {
      return;
    }
    this.closeMenu();
  };

  render() {
    const {
      className,
      navPosition,
      hideNav,
      hideSignin,
      bottomOuterDivider,
      bottomDivider,
      ...rest
    } = this.props;

    const classes = classNames(
      "site-header",
      bottomOuterDivider && "has-bottom-divider",
      className
    );

    return (
      <header {...rest} className={classes}>
        <div className="container">
          <div
            className={classNames(
              "site-header-inner",
              bottomDivider && "has-bottom-divider"
            )}
          >
            <Logo />
            {!hideNav && (
              <>
                <button
                  ref={this.hamburger}
                  className="header-nav-toggle"
                  onClick={this.state.isActive ? this.closeMenu : this.openMenu}
                >
                  <span className="screen-reader">Menu</span>
                  <span className="hamburger">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                <nav
                  ref={this.nav}
                  className={classNames(
                    "header-nav",
                    this.state.isActive && "is-active"
                  )}
                >
                  <div className="header-nav-inner">
                    <ul
                      className={classNames(
                        "list-reset text-xs",
                        navPosition && `header-nav-${navPosition}`
                      )}
                    >
                      <li>
                        <Link href="/contact">
                          <a onClick={this.closeMenu}>Contact</a>
                        </Link>
                      </li>
                    </ul>
                    {!hideSignin && (
                      <ul className="list-reset header-nav-right">
                        <li>
                          <Link href="/career">
                            <a
                              className="button button-primary button-wide-mobile button-sm"
                              onClick={this.closeMenu}
                            >
                              Career
                            </a>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </nav>
              </>
            )}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;