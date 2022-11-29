import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

import usersStorage from "../../utils/usersStorage";

export default class Search extends Component {
  search = () => {
    //获取用户输入
    // const {keyWordElement : {value}} = this;//连续结构赋值，只能拿到最末端的变量
    const {
      keyWordElement: { value: keyWord },
    } = this; //给对象里的属性重命名并取值
    //import axios包后发送具体的请求(发送请求前通知list改变状态)
    // this.props.updateAppState({ isFirst: false, isLoading: true });
    PubSub.publish("searchKeyWord", { isFirst: false, isLoading: true });
    axios.get("https://api.github.com/users?q=${keyWord}").then(
      // axios.get("http://localhost:3000/api1/search/users?q=${keyWord}").then(
      //请求成功后通知list更新状态
      (response) => {
        const localUsers = usersStorage.saveUsers(response.data);
        // this.props.updateAppState({ isLoading: false, users: localUsers });
        PubSub.publish("searchKeyWord", { isLoading: false, users: localUsers });
      },
      //请求失败后通知App更新状态
      // (error) => this.props.updateAppState({ err: error.message })
      (error) => {
        PubSub.publish("searchKeyWord", { err: error.message });
      }
    );
  };
  render() {
    // console.log("search",this.props);
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="请输入关键词"
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
