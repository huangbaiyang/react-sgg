import React, { Component } from "react";
// import qs from "querystring";

let data = [
  { id: 1, content: "你好中国！" },
  { id: 2, content: "你好黑马@" },
  { id: 3, content: "你好苹果?" },
];

export default class Detail extends Component {
  render() {
    console.log(this.props);
    //第一种：路由组件传递params参数
    // const  { id, title } = this.props.match.params;
    // let res = data.find((item)=>{
    //   return item.id == id;
    // });
    //第二种：路由组件传递search参数
    // const { search } = this.props.location;
    // const { id, title } = qs.parse(search.slice(1));
    // let res = data.find((item) => {
    //   return item.id == id;
    // });
    //第三种：路由组件传递state参数
    const {id,title} = this.props.location.state;
        let res = data.find((item) => {
      return item.id == id;
    });
    return (
      <>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{res.content}</li>
        </ul>
      </>
    );
  }
}
