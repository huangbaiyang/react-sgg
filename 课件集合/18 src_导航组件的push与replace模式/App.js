import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import MyNavLink from "./components/mynavlink";
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
            <MyNavLink replace to="/about">About</MyNavLink>
            <br></br>
            <MyNavLink replace to="/home">Home</MyNavLink>
            <br></br>
          </div>
          <br></br>
          <div>
            {/* 2.注册路由 */}
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
              <Redirect to='/about'></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}
