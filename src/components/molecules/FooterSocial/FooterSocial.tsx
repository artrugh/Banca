import React, { Component } from "react";
import classNames from "classnames";

interface IProps {
  className?: string;
  [propName: string]: any;
}

class FooterSocial extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { className, ...rest } = this.props;
    const classes = classNames("footer-social", className);

    return (
      <div {...rest} className={classes}>
        <ul className="list-reset">
          <li>
            <a
              href="https://www.linkedin.com/in/arturorugh/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="20"
                height="20"
                viewBox="0 0 32 32"
              >
                <title>LinkedIn</title>
                <path d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756zm2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/artrugh"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="20"
                height="20"
                viewBox="0 0 32 32"
              >
                <title>GitHub</title>
                <path d="M16 .396c-8.839 0-16 7.167-16 16c0 7.073 4.584 13.068 10.937 15.183c.803.151 1.093-.344 1.093-.772c0-.38-.009-1.385-.015-2.719c-4.453.964-5.391-2.151-5.391-2.151c-.729-1.844-1.781-2.339-1.781-2.339c-1.448-.989.115-.968.115-.968c1.604.109 2.448 1.645 2.448 1.645c1.427 2.448 3.744 1.74 4.661 1.328c.14-1.031.557-1.74 1.011-2.135c-3.552-.401-7.287-1.776-7.287-7.907c0-1.751.62-3.177 1.645-4.297c-.177-.401-.719-2.031.141-4.235c0 0 1.339-.427 4.4 1.641a15.436 15.436 0 0 1 4-.541c1.36.009 2.719.187 4 .541c3.043-2.068 4.381-1.641 4.381-1.641c.859 2.204.317 3.833.161 4.235c1.015 1.12 1.635 2.547 1.635 4.297c0 6.145-3.74 7.5-7.296 7.891c.556.479 1.077 1.464 1.077 2.959c0 2.14-.02 3.864-.02 4.385c0 .416.28.916 1.104.755c6.4-2.093 10.979-8.093 10.979-15.156c0-8.833-7.161-16-16-16z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://vimeo.com/arturorugh">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="20"
                height="20"
                viewBox="0 0 1000 1000"
              >
                <title>Vimeo</title>
                <path d="M1000 89v824q0 36-26 62t-62 26H88q-36 0-62-26T0 913V89q0-36 26-62T88 1h824q36 0 62 26t26 62zM880 254q0-93-112-93q-74 0-139 53t-89 126q12-2 23-2q8 0 15 1q18 2 32 7t22 19.5t8 38.5q0 43-38 119t-75 76q-19 0-36-19q-24-25-38-94.5T433 351t-31-117t-70-52q-37 0-80 26t-104.5 80.5T80 347v5q5 5 10.5 14.5t12 14T121 385q11 0 33-7t34-7q26 0 43 40q5 13 12.5 37.5T254 481q14 40 37 130l6.5 26l8 32l9.5 32.5l12.5 35l14 31.5l17.5 29.5l20.5 22l25 16.5l28.5 5q67 0 145-65t138.5-156t105-182.5T877 288q3-18 3-34z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterSocial;
