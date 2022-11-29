import React, { Component } from "react";
import { NavLink, Redirect, Route, Switch, withRouter } from "react-router-dom";
import MyNavLink from "./components/mynavlink";
import About from "./pages/about";
import Home from "./pages/home";

class App extends Component {
  back = () => {
    this.props.history.goBack();
  };
  forward = () => {
    this.props.history.goForward();
  };
  go = () => {
    this.props.history.go(-1);
  };
  render() {
    console.log(this.props);
    return (
      <>
        <div>
          <div>
            <h3>REACT ROUTER DEMO</h3>
            &nbsp;
            <button
              onClick={() => {
                this.back();
              }}
            >
              后退
            </button>
            &nbsp;
            <button
              onClick={() => {
                this.forward();
              }}
            >
              前进
            </button>
            &nbsp;
            <button
              onClick={() => {
                this.go();
              }}
            >
              跳转
            </button>
          </div>
          <div>
            <br></br>
            <div>
              {/* 原生html靠a标签跳转不同页面
          <a href="./about.html">About</a><br></br>
          <a href="./home.html">Home</a> */}
              {/* 1.编写路由链接--在react中靠路由链接Link切换不同页面 */}
              <MyNavLink to="/about">About</MyNavLink>
              <br></br>
              <MyNavLink to="/home">Home</MyNavLink>
              <br></br>
            </div>
            <br></br>
            <div>
              {/* 2.注册路由 */}
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Redirect to="/about"></Redirect>
              </Switch>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(App);
