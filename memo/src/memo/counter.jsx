import { useState } from "react";
import { CounterChild } from "./counterChild";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const sum = () => {
    setCounter(counter + 1);
  };
  const sub = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h2>Counter</h2>
      <nav>
        <button onClick={sub}>-</button>
        <button onClick={sum}>+</button>
      </nav>
      <h3>{counter}</h3>
      <CounterChild />
    </>
  );
};
