import React, { Component, createRef, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const propTypes = {
  src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
};

const defaultProps = {
  src: undefined,
  width: undefined,
  height: undefined,
  alt: undefined,
};

class Image extends Component {
  constructor(props) {
    super(props);
    this.image = createRef();
  }

  componentDidMount() {
    const placeholderImage = document.createElement("img");
    this.handlePlaceholder(this.image.current, placeholderImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  placeholderSrc = (w, h) => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`;
  };

  handlePlaceholder = (img, placeholder) => {
    img.style.display = "none";

    img.before(placeholder);

    placeholder.src = this.placeholderSrc(
      img.getAttribute("width") || 0,
      img.getAttribute("height") || 0
    );

    placeholder.width = img.getAttribute("width");
    placeholder.height = img.getAttribute("height");
    placeholder.style.opacity = "0";

    img.className && placeholder.classList.add(img.className);

    if (img) {
      placeholder.remove();
      img.style.display = "";
      // or 
      // this event is not working in the logo and hero img
      img.addEventListener("load", () => {
        placeholder.remove();
        img.style.display = "";
      });
    }
  };
  render() {
    const { className, src, width, height, alt, ...rest } = this.props;
    return (
      <img
        {...rest}
        ref={this.image}
        className={className}
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    );
  }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;