import { useSelector, useDispatch } from "react-redux";
import { increment } from "./slices/counter/counterSlice";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Hi Two</h1>
      <p>This is the counter {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </>
  );
}

export default App;
