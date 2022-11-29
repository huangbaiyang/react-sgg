import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useMemo,
  useCallback,
  useReducer,
} from "react";

import Boy from "./函数组件的子组件";

export default function HookDemo(props) {
  const [sum,setSum] = useState(0);

  function fromChild(value) {
    setSum(sum => sum += value);
  }

  return (
    <>
    <h1>合计数是={sum}</h1>
      <Boy callBack={fromChild} />
    </>
  );
}
