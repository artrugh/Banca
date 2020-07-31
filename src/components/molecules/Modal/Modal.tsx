import React, { Component, ReactNode, MouseEvent, KeyboardEvent } from "react";
import classNames from "classnames";

import { Iclasses, KeyboardEventHandler } from "../../../common/interfaces";

type KeyboardEventNames = "keydown" | "keyup";

interface IProps {
  closeModal?: (e: MouseEvent<HTMLElement>) => void;
  closeModalDocument?: (e: KeyboardEventHandler) => void;
  closeModalKeyboard?: (e: KeyboardEvent<HTMLDivElement>) => void;
  children?: ReactNode;
  show: boolean;
  closeHidden?: boolean;
  video?: string;
  videoTag?: "iframe" | "video";
  [propName: string]: boolean | string | Function | ReactNode;
}

const DefaultProps: IProps = {
  children: null,
  show: false,
  closeHidden: false,
  video: "",
  videoTag: "iframe",
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
      document.addEventListener(eventName, (e: KeyboardEventHandler | Event) => {
        this.keyPress(e);
      });
    });

    // document.addEventListener("keydown", this.keyPress);
    document.addEventListener("click", (e: Event) => e.stopPropagation());
  }

  public componentDidUpdate(prevProps: IProps): void {
    // console.log("Modal DidUpdate");

    if (prevProps.show !== this.props.show) {
      // const eventNames: KeyboardEventNames[] = ["keydown", "keyup"];
      // eventNames.forEach((eventName) => {
      //   document.addEventListener(eventName, (e: KeyboardEvent<Element>): void => {
      //     this.keyPress(e);
      //   });
      // });
      document.addEventListener("keydown", this.keyPress);
      document.addEventListener("click", (e: Event): void => e.stopPropagation());
    } else {
      this.handleBodyClass();
    }
  }

  private get classes(): Iclasses {
    const { className, show, video } = this.props;
    const classes = classNames("modal", show && "is-active", video && "modal-video", className);

    return { classes };
  }

  private handleBodyClass = (): void => {
    let elementArray: NodeListOf<Element> = null;
    elementArray = document.querySelectorAll(".modal.is-active");

    if (elementArray.length) {
      document.body.classList.add("modal-is-active");
    } else {
      document.body.classList.remove("modal-is-active");
    }
  };

  private keyPress = (e: KeyboardEventHandler): void => {
    const { keyCode } = e;

    if (keyCode === 27) {
      this.props.closeModalDocument(e);
    }
  };

  private stopProgagation = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  private stopProgagationKeyboard = (e: KeyboardEvent<HTMLDivElement>): void => {
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

    return (
      <>
        {show && (
          <div
            {...rest}
            className={this.classes.classes}
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
                <div className="responsive-video">
                  {videoTag === "iframe" ? (
                    <iframe title="video" src={video} frameBorder="0" allowFullScreen />
                  ) : (
                    <video v-else controls src={video}>
                      <track default kind="captions" srcLang="en" src={video} />
                    </video>
                  )}
                </div>
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
