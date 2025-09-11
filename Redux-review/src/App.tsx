import { useAppSelector, useAppDispatch } from "./store/hooks/hooks";
import {
  increment,
  decrement,
  incrementByTwo,
  incrementByAmount,
} from "./store/slices/counter";
import "./App.css";

const selectCounterValue = (state: RootState) => state.counter.value;

function App() {
  const value = useAppSelector(selectCounterValue);
  const dispatch = useAppDispatch();

  const INCREMENT_AMOUNT = 5;

  return (
    <>
      <h1>Hello Juan</h1>
      <div>{value}</div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByTwo())}>Increment by 2</button>
      <button onClick={() => dispatch(incrementByAmount(INCREMENT_AMOUNT))}>
        Increment by {INCREMENT_AMOUNT}
      </button>
      {/* New buttons */}
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by 10
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement Again
      </button>
    </>
  );
}

export default App;
