import React, { Component } from "react";

class Video extends Component {
  render() {
    const { videoTag, video } = this.props;
    return (
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
    );
  }
}

export default Video;
