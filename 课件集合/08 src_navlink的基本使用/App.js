import React from "react";
import { NavLink, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

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
            <NavLink activeClassName="navlink" to="/about">About</NavLink>
            <br></br>
            <NavLink activeClassName="navlink" to="/home">Home</NavLink>
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
