import { Component, h, vNode, reactive } from "suika";
import { Button } from "suika-ui"

export class Home extends Component {
  state = reactive({ 
    count: 0 
  })
  public render(): vNode {
    return (
      <div id="home">
        <h1 className="title">Hello World</h1>
        <Button onclick={() => this.state.value.count++}>
          Count: {this.state.value.count.toString()}
        </Button>
      </div>
    )
  }
}
