import SubMenu from "antd/lib/menu/SubMenu";
import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useReducer,
  useRef,
  useMemo,
} from "react";

export default function Boy(props) {
  const [count, setCount] = useState(0);


  function  handleClick() {
    setCount(count => count + 1);
    console.log("完成更新前的count1 = ",count);
  }

  

// useEffect(()=>{
//   console.log("完成更新后的count2 = ",count);
//   props.callBack(count);
// },[count])

  return (
    <div>
      <button onClick={handleClick}>点击统计</button>
    </div>
  );
}
