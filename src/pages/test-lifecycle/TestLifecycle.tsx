import React, { useEffect, useState } from "react";

type Props = {
  name: string;
};

function TestLifecycle(props: Props): JSX.Element {
  const a = "a";
  const [count, setCount] = useState(0);

  // cc: constructor(), fc: 함수 내부
  alert(`constructor(), a: ${a}, props.name: ${props.name}, count: ${count}`);

  useEffect(() => {
    alert("componentDidMount()");
  }, []);

  useEffect(() => {
    alert("componentDidUpdate()");
  }, [count]);

  useEffect(() => {
    return () => alert("componentWillUnmount()");
  }, []);

  function onClickIncrement(): void {
    setCount(count + 1);
  }

  // cc: render(), fc: return()
  return (
    <>
      {alert("render()")}
      <div>TestLifecycle</div>
      <div>
        <button onClick={onClickIncrement}>count: {count}</button>
      </div>
    </>
  );
}

export default TestLifecycle;
