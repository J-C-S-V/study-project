import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  for (let i = 0; i < 1000000000; i++) {
    continue;
  }

  const handleClick = (e) => {
    if (e.target.innerText === "Minus") {
      setCount(count - 1);
      console.log(e.target.innerText);
    } else {
      setCount(count + 1);
      console.log(e.target.innerText);
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <button onClick={handleClick}>Minus</button>
      <div>{count}</div>
      <button onClick={handleClick}>Plus</button>
    </>
  );
}

export default App;
