import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter</h1>
      <div>{value}</div>
      <button onClick={() => dispatch()}>Increment</button>
    </>
  );
}

export default App;
