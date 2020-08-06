import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { VideoTag } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

interface IProps {
  videoTag?: VideoTag;
  video?: string;
}
class Video extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { videoTag, video } = this.props;

    return (
      <div className="responsive-video">
        {videoTag === VideoTag.iframe ? (
          <iframe title="video" src={video} frameBorder="0" allowFullScreen />
        ) : (
          <video v-else controls src={video}>
            <track default kind="captions" srcLang="en" src={video} />
          </video>
        )}
      </div>
    );
  }
}

export default Video;
