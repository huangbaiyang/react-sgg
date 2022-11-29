import React, { Component } from "react";
import Search from "../src/components/search";
import List from "../src/components/list";
export default class App extends Component {

  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    );
  }
}
