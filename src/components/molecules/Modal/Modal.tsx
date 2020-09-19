import React, { Component, ReactNode, MouseEvent, KeyboardEvent } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IEventHandler } from "../../../common/interfacesEvents";
import { VideoTag } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

type KeyboardEventNames = "keydown" | "keyup";

interface IProps {
  closeModal?: (e: MouseEvent<HTMLElement>) => void;
  closeModalDocument?: (e: KeyboardEvent) => void;
  closeModalKeyboard?: (e: KeyboardEvent<HTMLDivElement>) => void;
  children?: ReactNode;
  show: boolean;
  closeHidden?: boolean;
  video?: string;
  videoTag?: VideoTag;
  className?: string;
  id?: string;
}

const DefaultProps: IProps = {
  children: null,
  show: false,
  closeHidden: false,
  video: "",
  videoTag: VideoTag.iframe,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Modal extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IProps) {
    super(props);
  }

  public componentDidMount(): void {
    const eventNames: KeyboardEventNames[] = ["keydown", "keyup"];
    eventNames.forEach((eventName) => {
      document.addEventListener(eventName, (e: Event) => {
        this.keyPress(e);
      });
    });
    document.addEventListener("click", (e) => e.stopPropagation());
  }

  public componentDidUpdate(prevProps: IProps): void {
    if (prevProps.show !== this.props.show) {
      document.addEventListener("keydown", this.keyPress);
      document.addEventListener("click", (e) => e.stopPropagation());
    } else {
      this.handleBodyClass();
    }
  }

  private handleBodyClass = (): void => {
    const elementArray = document.querySelectorAll(
      ".modal.is-active"
    )! as NodeListOf<Element>;

    if (elementArray.length) {
      document.body.classList.add("modal-is-active");
    } else {
      document.body.classList.remove("modal-is-active");
    }
  };

  private keyPress: IEventHandler<Event | KeyboardEvent> = (
    e: KeyboardEvent
  ): void => {
    const { keyCode } = e;

    if (keyCode === 27) {
      this.props.closeModalDocument(e);
    }
  };

  private stopProgagation: IEventHandler<MouseEvent<HTMLDivElement>> = (
    e: MouseEvent<HTMLDivElement>
  ): void => {
    e.stopPropagation();
  };

  private stopProgagationKeyboard: IEventHandler<
    KeyboardEvent<HTMLDivElement>
  > = (e: KeyboardEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  public render(): JSX.Element {
    const {
      className,
      children,
      show,
      closeHidden,
      video,
      videoTag,
      closeModal,
      closeModalDocument,
      closeModalKeyboard,
      ...rest
    } = this.props;

    const VideoTagComponent =
      videoTag === VideoTag.iframe ? (
        <iframe title="video" src={video} frameBorder="0" allowFullScreen />
      ) : (
        <video v-else controls src={video}>
          <track default kind="captions" srcLang="en" src={video} />
        </video>
      );

    return (
      <>
        {show && (
          <div
            {...rest}
            className={cn("modal", className, {
              "is-active": show,
              "modal-video": video,
            })}
            onClick={closeModal}
            onKeyDown={closeModalKeyboard}
            tabIndex={0}
            role="button"
          >
            <div
              role="button"
              className="modal-inner"
              onClick={this.stopProgagation}
              onKeyDown={this.stopProgagationKeyboard}
              tabIndex={0}
            >
              {video ? (
                <div className="responsive-video">{VideoTagComponent}</div>
              ) : (
                <>
                  {!closeHidden && (
                    <button
                      type="button"
                      className="modal-close"
                      aria-label="close"
                      onClick={closeModal}
                      tabIndex={0}
                    />
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

export default Modal;
