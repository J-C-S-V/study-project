import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";

// import { increment, decrement } from "./store/slices/counter";

function App() {
  const holas = useSelector((state) => state.counter);
  // console.log(holas);

  return (
    <>
      <h1>Hello Juan</h1>
      <div>{1}</div>
    </>
  );
}

export default App;
