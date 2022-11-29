import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: 1, title: "消息1" },
      { id: 2, title: "消息2" },
      { id: 3, title: "消息3" },
    ],
  };
  render() {
    return (
      <>
        <ul>
          {this.state.messageArr.map((item) => {
            return (
              <li key={item.id}>
                {/* 第一种：向Detail路由传递params参数 */}
                {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                  {item.title}
                </Link> */}

                {/* 第二种:向Detail路由传递search参数 */}
                {/* <Link
                  to={`/home/message/detail/?id=${item.id}&title=${item.title}`}
                >
                  {item.title}
                </Link> */}
                {/* 第三种:向Detail路由传递state参数 */}
                <Link
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: item.id, title: item.title },
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr></hr>
        {/* 第一种：声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

        {/* 第二种:无需接收search参数,正常进行路由注册 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        {/* 第三种:无需接收state参数,正常进行路由注册 */}
        <Route path="/home/message/detail" component={Detail} />
      </>
    );
  }
}
