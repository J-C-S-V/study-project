import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./slices/counter/counterSlice";
import "./App.css";
import { useEffect, useState } from "react";
import { counterThunk } from "./slices/counter/counterThunk";

function App() {
  const counterValue = useSelector((state) => state.counter.value);
  const usersData = useSelector((state) => state.counter.users);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(2);

  const handleChange = (e) => {
    setAmount(Number(e.target.value));
  };

  useEffect(() => {
    dispatch(counterThunk());
  }, []);

  return (
    <>
      <h1>Api test</h1>
      <div>Counter: {counterValue}</div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by amount{" "}
      </button>
      <input value={amount} type="number" onChange={handleChange} />
      <button onClick={() => dispatch(reset())}>Reset</button>
      <h2>Active users:</h2>
      <h3>{usersData.length > 0 ? usersData[0].name : "Loading"}</h3>
      <ul>
        {usersData.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
