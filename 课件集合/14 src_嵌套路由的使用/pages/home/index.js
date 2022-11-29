import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import Message from "./message";
import News from "./news";
import MyNavLink from "../../components/mynavlink";

export default class Home extends Component {
  render() {
    return (
      <Router>
        <h3>我是Home组件的内容</h3>
        <div>
          <ul>
            <li>
              {/* <a href="./home/news.js">News</a> */}
              <MyNavLink to="/home/news">Newssss</MyNavLink>
            </li>
            <li>
              {/* <a href="./home/message.js">Message</a> */}
              <MyNavLink to="/home/message">Messagessss</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </div>
      </Router>
    );
  }
}
