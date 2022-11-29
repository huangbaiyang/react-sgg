//子组件
import React, { PureComponent } from "react";

export default class Little extends PureComponent {
  state = {};
  static getDerivedStateFromProps(props) {
    console.log("little组件getDerivedStateFromProps");
    return { ...props };
  }
  render() {
    console.log("little组件render");
    return (
      <>
        <li>{this.props.value}</li>
      </>
    );
  }

  getSnapshotBeforeUpdate() {
    console.log("little组件getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("little组件DidUpdate");
  }
}
