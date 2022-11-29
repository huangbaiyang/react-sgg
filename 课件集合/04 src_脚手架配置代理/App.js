import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  getStudentData = () => {
    axios.get("http://localhost:3000/api1/students").then(
      //跨域发送请求，只能发给相同端口号的代理器再转发
      (response) => console.log("response", response.data),
      (error) => console.log("error", error)
    );
  };
  getCarData = () => {
    axios.get("http://localhost:3000/api2/cars").then(
      (response) => console.log("response", response.data),
      (error) => console.log("error", error)
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>获取学生信息数据</button>
        <button onClick={this.getCarData}>获取汽车数据</button>
      </div>
    );
  }
}
