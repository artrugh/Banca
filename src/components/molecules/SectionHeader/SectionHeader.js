import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(["h1", "h2", "h3"]),
};

const defaultProps = {
  children: null,
  tag: "h2",
};

class SectionHeader extends Component {
  render() {
    const { className, data, children, tag, ...rest } = this.props;
    const Component = tag;
    return (
      <>
        {(data.title || data.paragraph) && (
          <div {...rest} className={classNames("section-header", className)}>
            <div className="container-xs">
              {children}
              {data.title && (
                <Component
                  className={classNames(
                    "mt-0",
                    data.paragraph ? "mb-16" : "mb-0"
                  )}
                >
                  {data.title}
                </Component>
              )}
              {data.paragraph && <p className="m-0">{data.paragraph}</p>}
            </div>
          </div>
        )}
      </>
    );
  }
}

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;
