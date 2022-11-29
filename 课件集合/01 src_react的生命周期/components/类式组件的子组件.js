import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Little from "./little";
import { root } from "../index";

export default class Son extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
    };
    console.log("子组件constructor钩子");
  }

  static getDerivedStateFromProps(props) {
    console.log("子组件getDerivedStateFromProps钩子");
    return { ...props };
  }

  shouldComponentUpdate(prevProps, nextProps) {
    console.log("子组件shouldComponentUpdate钩子");
    console.log("子组件this.props", this.props);
    return true;
  }
  handleClick = (e) => {
    root.unmount(document.getElementById("root"));
  };
  render() {
    console.log("子组件render钩子");
    return (
      <div style={{opacity:this.state.opacity}}>
        <h1>黄柏杨有{this.state.count}个女朋友</h1>
        <button onClick={(e) => this.handleClick(e)}>点击卸载子组件</button>
        <Little value={this.props.sum} />
      </div>
    );
  }

  componentDidMount() {
    console.log("子组件DidMount钩子");
    this.timer = setInterval(() => {
      let {opacity} = this.state;
      opacity -= 0.1;
      if(opacity <= 0) opacity = 1;
      // this.setState({opacity});
    }, 200);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log("子组件prevProps", prevProps, "子组件prevState", prevState);
    console.log("子组件getSnapshotBeforeUpdate钩子");
    return { ...this.props };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("子组件snapshot", snapshot);
    console.log("子组件DidUpdate钩子");
  }

  componentWillUnmount() {
    console.log("子组件WillUnmount钩子");
    clearInterval(this.timer);
  }
}
