import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  closeHidden: PropTypes.bool,
  video: PropTypes.string,
  videoTag: PropTypes.oneOf(["iframe", "video"]),
};

const defaultProps = {
  children: null,
  show: false,
  closeHidden: false,
  video: "",
  videoTag: "iframe",
};

class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.keyPress);
    document.addEventListener("click", this.stopProgagation);
  }

  componentDidUpdate(prevProps) {
    console.log("Modal DidUpdate");
    if (prevProps.show !== this.props.show) {
      document.addEventListener("keydown", this.keyPress);
      document.addEventListener("click", this.stopProgagation);
    } else {
      this.handleBodyClass();
    }
  }

  handleBodyClass = () => {
    if (document.querySelectorAll(".modal.is-active").length) {
      document.body.classList.add("modal-is-active");
    } else {
      document.body.classList.remove("modal-is-active");
    }
  };

  keyPress = (e) => {
    e.keyCode === 27 && closeModal(e);
  };

  stopProgagation = (e) => {
    e.stopPropagation();
  };

  render() {
    const {
      className,
      children,
      show,
      closeHidden,
      video,
      videoTag,
      closeModal,
      ...rest
    } = this.props;

    const classes = classNames(
      "modal",
      show && "is-active",
      video && "modal-video",
      className
    );

    return (
      <>
        {show && (
          <div {...rest} className={classes} onClick={closeModal}>
            <div className="modal-inner" onClick={this.stopProgagation}>
              {video ? (
                <div className="responsive-video">
                  {videoTag === "iframe" ? (
                    <iframe
                      title="video"
                      src={video}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video v-else controls src={video}></video>
                  )}
                </div>
              ) : (
                <>
                  {!closeHidden && (
                    <button
                      className="modal-close"
                      aria-label="close"
                      onClick={closeModal}
                    ></button>
                  )}
                  <div className="modal-content">{children}</div>
                </>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
