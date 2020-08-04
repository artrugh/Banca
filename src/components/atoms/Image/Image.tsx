import React, { Component, createRef } from "react";

interface IProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}

const DefaultProps: IProps = {
  src: undefined,
  width: undefined,
  height: undefined,
  alt: undefined,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Image extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  private image = createRef<HTMLImageElement>();

  public constructor(props: IProps) {
    super(props);
  }

  public componentDidMount(): void {
    const placeholderImage = document.createElement("img")! as HTMLImageElement;
    this.handlePlaceholder(this.image.current, placeholderImage);
  }

  private placeholderSrc = (w: number, h: number): string => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`;
  };

  private handlePlaceholder = (img: HTMLImageElement, placeholder: HTMLImageElement): void => {
    img.style.display = "none";

    img.before(placeholder);

    placeholder.src = this.placeholderSrc(
      +img.getAttribute("width") ?? 0,
      +img.getAttribute("height") ?? 0
    );

    placeholder.width = +img.getAttribute("width");
    placeholder.height = +img.getAttribute("height");
    placeholder.style.opacity = "0";

    if (img.className) {
      placeholder.classList.add(img.className);
    }

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

  public render(): JSX.Element {
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

export default Image;
