import "./App.css";
import { useState } from "react";
import { Child } from "./components/Child";
import { Test } from "./components/Test";

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  const handleClickPlus = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <>
      <h1>useState</h1>
      <div>{counter}</div>
      <button onClick={handleClick}>Decrement</button>{" "}
      <button onClick={handleClickPlus}>Increment</button>
      <Child />
      <Test>
        <h1>hi</h1>
        <h2>hola</h2>
      </Test>
    </>
  );
}

export default App;
