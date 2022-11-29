import React, { Component } from "react";
import axios from "axios";
import usersStorage from "../../utils/usersStorage";

export default class Search extends Component {
  search = () => {
    //获取用户输入
    // const {keyWordElement : {value}} = this;//连续结构赋值，只能拿到最末端的变量
    const {
      keyWordElement: { value: keyWord },
    } = this; //给对象里的属性重命名并取值
    //import axios包后发送具体的请求()
    this.props.changeAppState({ isFirst: false, isLoading: true });
    // axios.get("https://api.github.com/users?q=${keyWord}").then(
    axios.get("http://localhost:3000/api1/search/users?q=${keyWord}").then(
      (response) => {
        const localUsers = usersStorage.saveUsers(response.data);
        this.props.changeAppState({ isLoading: false, users: localUsers }); 
      },
      (error) => this.props.changeAppState({ err: error.message })
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
