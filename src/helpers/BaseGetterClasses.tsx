import { Component } from "react";
import { Iclasses } from "../common/interfaces";

export default abstract class BaseGetterClasses<P, S> extends Component<P, S> {
  abstract get classes(): Iclasses;
}
