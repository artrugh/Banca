import React, { Component, ReactNode } from "react";
import classNames from "classnames";

import { IHeader, Headings, Iclasses } from "../../../common/interfaces";

interface IProps {
  data: IHeader;
  children?: ReactNode;
  tag?: Headings;
  [index: string]: {} | string;
}

const DefaultProps: IProps = {
  data: {
    title: "Hey You, write a title here!",
    paragraph: "you are missing a huge description about my session",
  },
  tag: Headings.h1,
  children: null,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class SectionHeader extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IProps) {
    super(props);
  }

  private get classes(): Iclasses {
    const { data, className } = this.props;
    const containerClasses = classNames("section-header", className);
    const headingClasses = classNames("mt-0", data.paragraph ? "mb-16" : "mb-0");

    return { containerClasses, headingClasses };
  }

  public render(): JSX.Element {
    const { className, data, children, tag, ...rest } = this.props;
    const C = tag;

    return (
      <>
        {(data.title || data.paragraph) && (
          <div {...rest} className={this.classes.containerClasses}>
            <div className="container-xs">
              {children}
              {data.title && <C className={this.classes.headingClasses}>{data.title}</C>}
              {data.paragraph && <p className="m-0">{data.paragraph}</p>}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default SectionHeader;
