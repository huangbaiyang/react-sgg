import React, { Component } from "react";

import Search from "./components/search";
import List from "./components/list";

export default class App extends Component {
  //初始化状态
  state = {
    users:[],//users初始值为数组
    isFirst:true,
    isLoading:false,
    err:"",
  };

  changeAppState = (currentState) => {
    this.setState(currentState);
  };
  render() {
    const { users } = this.state;
    // console.log("App", users);
    return (
      <div className="container">
        <Search changeAppState={this.changeAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
