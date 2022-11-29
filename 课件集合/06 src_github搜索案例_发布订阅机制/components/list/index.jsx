import React, { Component } from "react";
import PubSub from "pubsub-js";

import "./index.css";

export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: "",
  };

  componentDidMount() {
    this.token = PubSub.subscribe("searchKeyWord", (_, stateObj) =>
      this.setState(stateObj)
    );
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state;
    // console.log("list",this.props);
    return (
      <div className="row">
        {isFirst ? (
          <h2>请输入关键字进行搜索</h2>
        ) : isLoading ? (
          <h2>Loading...</h2>
        ) : err ? (
          <h2 style={{ color: "red" }}>{err}</h2>
        ) : (
          users.map((userObj) => {
            return (
              <div key={userObj.id} className="card">
                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img
                    alt="head_protrait"
                    src={userObj.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
