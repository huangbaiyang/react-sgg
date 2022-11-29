import React from "react";
import { Link, Route } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";

export default function App() {
  return (
    <>
      <div>
        <div>
          <h3>REACT ROUTER DEMO</h3>
        </div>
        <div>
          <br></br>
          <div>
            {/* 原生html靠a标签跳转不同页面
          <a href="./about.html">About</a><br></br>
          <a href="./home.html">Home</a> */}
            {/* 1.编写路由链接--在react中靠路由链接Link切换不同页面 */}
            <Link to="/about">About</Link>
            <br></br>
            <Link to="/home">Home</Link>
          </div>
          <br></br>
          <div>
            {/* 2.注册路由 */}
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
          </div>
        </div>
      </div>
    </>
  );
}
