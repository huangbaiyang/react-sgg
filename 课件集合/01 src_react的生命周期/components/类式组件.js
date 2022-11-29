import React, { Component } from "react";

import Son from "./类式组件的子组件";

export default class ClassDemo extends Component {
  // 一.挂载阶段
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      sum: 0,
      arr: [1],
    };
    console.log("父组件constructor钩子");
  }
  // componentWillMount(){
  //     console.log("WillMount父亲钩子");
  // }

  static getDerivedStateFromProps(props) {
    console.log("父组件getDerivedStateFromProps钩子");
    return { ...props };
  }

  shouldComponentUpdate() {
    console.log("父组件shouldComponentUpdate钩子");
    return true;
  }

  render() {
    console.log("父组件render钩子");
    return (
      <div>
        <Son count={this.state.count} sum={this.state.sum} />
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              sum: (this.state.sum += this.state.count),
            })
          }
        >
          点击帮黄柏杨找女朋友
        </button>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count - 1,
              sum: (this.state.sum -= this.state.count),
            })
          }
        >
          点击帮黄柏杨甩女朋友
        </button>
        <button onClick={() => this.setState({ arr: [] })}>
          点击看着黄柏杨的女朋友
        </button>
      </div>
    );
  }

  componentDidMount() {
    console.log("父组件DidMount钩子");
  }
  componentDidUpdate() {
    console.log("父组件DidUpdate钩子");
  }
}
