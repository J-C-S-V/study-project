import { useState } from "react";
import { CounterChild } from "../useCallback/counterChild";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const sum = () => {
    setCounter(counter + 1);
  };
  const sub = () => {
    setCounter(counter - 1);
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <h2>Counter</h2>
      <nav>
        <button onClick={sub}>-</button>
        <button onClick={sum}>+</button>
      </nav>
      <h3>{counter}</h3>
      <input
        type="text"
        name="text"
        id="text"
        onChange={handleInput}
        value={input}
      />
      <CounterChild counter={counter} />
    </>
  );
};
