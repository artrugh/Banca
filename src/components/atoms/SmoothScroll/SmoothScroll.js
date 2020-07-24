import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onLinkClick: PropTypes.func,
};

class SmoothScroll extends Component {
  constructor(props) {
    super(props);
  }

  easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
  scrollToEl(
    startTime,
    currentTime,
    duration,
    scrollEndElemTop,
    startScrollOffset
  ) {
    const runtime = currentTime - startTime;
    let progress = runtime / duration;

    progress = Math.min(progress, 1);

    const ease = this.easeInOutQuad(progress);

    window.scroll(0, startScrollOffset + scrollEndElemTop * ease);
    if (runtime < duration) {
      window.requestAnimationFrame((timestamp) => {
        const currentTime = timestamp || new Date().getTime();
        this.scrollToEl(
          startTime,
          currentTime,
          duration,
          scrollEndElemTop,
          startScrollOffset
        );
      });
    }
  }

  smoothScroll(e, to, duration) {
    e.preventDefault();

    const targetId = to;
    const target = document.getElementById(targetId);
    const timing = duration || 1000;
    
    if (!target) return;

    this.props.onLinkClick && onLinkClick();

    window.requestAnimationFrame((timestamp) => {
      const stamp = timestamp || new Date().getTime();
      const start = stamp;

      const startScrollOffset = window.pageYOffset;
      const scrollEndElemTop = target.getBoundingClientRect().top;

      this.scrollToEl(start, stamp, timing, scrollEndElemTop, startScrollOffset);
    });
  }

  render() {
    const { className, children, to, duration, ...rest } = this.props;

    return (
      <a
        {...rest}
        className={classNames(className)}
        href={"#" + to}
        onClick={(e)=>this.smoothScroll(e, to, duration)}
      >
        {children}
      </a>
    );
  }
}

SmoothScroll.propTypes = propTypes;

export default SmoothScroll;
