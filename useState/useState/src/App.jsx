import "./App.css";
import { useState } from "react";

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
    </>
  );
}

export default App;
