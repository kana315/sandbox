import * as React from "react";

interface IProps {
  countBy?: number;
}

interface IState {
  count: number;
  value: string;
}

class Description extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    console.log("constructor");
  }
  public defaultProps: Partial<IProps> = {
    countBy: 1
  };

  public state: IState = {
    count: 0,
    value: ""
  };

  public increase = () => {
    const countBy: number = this.props.countBy!;
    const count = this.state.count + countBy;
    this.setState({ count });
  };
  public change = (e: any) => {
    this.setState({ value: e.target.value });
  };
  // componentDidUpdate() {
  //   console.log("DidUpdate");
  // }
  shouldComponentUpdate(_: any, state: any) {
    return state.count <= 10;
  }
  public render() {
    return (
      <div>
        {console.log("render")}
        <p>My favorite number is {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
        <input onChange={this.change} />
      </div>
    );
  }
}

export default Description;
