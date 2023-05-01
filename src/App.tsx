import { Component, h, vNode } from "suika";
import { RouterView } from "suika-router";
import { router } from "./router";

export class App extends Component {
  public render(): vNode {
    return (
      <RouterView router={router} />
    )
  }
}
