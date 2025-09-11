import { useAppSelector, useAppDispatch } from "./store/hooks/hooks";
import {
  increment,
  decrement,
  incrementByTwo,
  incrementByAmount,
} from "./store/slices/counter";
import "./App.css";

// import { increment, decrement } from "./store/slices/counter";

function App() {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Hello Juan</h1>
      <div>{value}</div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByTwo())}>Increment by 2</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </>
  );
}

export default App;
