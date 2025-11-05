import { useState } from "react";
import CounterNumber from "./CounterNumber";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  function increment10() {
    setCount(count + 10);
  }

  function decrease() {
    setCount(count - 1);
  }

  function decrease10() {
    setCount(count - 10);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <CounterNumber count={count} />
      <Button handleClick={increment}>+1</Button>
      <Button handleClick={increment10}>+10</Button>
      <Button handleClick={decrease}>-1</Button>
      <Button handleClick={decrease10}>-10</Button>
      <Button handleClick={reset}>0</Button>
    </div>
  );
}
export default Counter;
