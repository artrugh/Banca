import React, { ReactNode, createElement } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS
import BaseClassesGetter from "../../_base/BaseGetterClasses";
// COMMON
import { IHeader, Headings, Iclasses } from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS

interface IProps {
  data: IHeader;
  children?: Partial<ReactNode>;
  tag: Headings;
  className?: string;
}

const DefaultProps: IProps = {
  data: {
    title: "Hey You, write a title here!",
    paragraph: "you are missing a huge description about my session",
  },
  tag: Headings.h1,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class SectionHeader<P extends IProps = IProps, S = {}> extends BaseClassesGetter<P, S> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: P) {
    super(props);
  }

  public get classes(): Iclasses {
    const { data, className } = this.props;
    const containerClasses = classNames("section-header", className);
    const headingClasses = classNames("mt-0", data.paragraph ? "mb-16" : "mb-0");

    return { containerClasses, headingClasses };
  }

  private createReactElement = (tag: string, props: {}): JSX.Element => {
    const e = createElement;
    const el: JSX.Element = e(tag, props);

    return el;
  };

  public render(): JSX.Element {
    const { className, data, children, tag, ...rest } = this.props;
    const props = { className: this.classes.headingClasses, children: data.title, ...rest };

    return (
      <>
        {(data.title || data.paragraph) && (
          <div {...rest} className={this.classes.containerClasses}>
            <div className="container-xs">
              {children}
              {data.title && this.createReactElement(tag, props)}
              {/* <C className={this.classes.headingClasses}>{data.title}</C> */}
              {data.paragraph && <p className="m-0">{data.paragraph}</p>}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default SectionHeader;
