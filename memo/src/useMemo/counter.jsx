// import { useState } from "react";
// import { CounterChild } from "../memo/counterChild";

// export const Counter = () => {
//   const [counter, setCounter] = useState(0);

//   const sum = () => {
//     setCounter(counter + 1);
//   };
//   const sub = () => {
//     setCounter(counter - 1);
//   };
//   return (
//     <>
//       <h2>Counter</h2>
//       <nav>
//         <button onClick={sub}>-</button>
//         <button onClick={sum}>+</button>
//       </nav>
//       <h3>{counter}</h3>
//       <CounterChild />
//     </>
//   );
// };

import { useState, useMemo } from "react";
import { CounterChild } from "../memo/counterChild";
import { heavyWork } from "../../utils/heavyWork";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const sum = () => {
    setCounter(counter + 1);
  };
  const sub = () => {
    setCounter(counter - 1);
  };
  const memoHeavyWork = useMemo(() => heavyWork(counter), [counter]);
  return (
    <>
      <h2>Counter</h2>
      <nav>
        <button onClick={sub}>-</button>
        <button onClick={sum}>+</button>
      </nav>
      <h3>{counter}</h3>
      <CounterChild />
    </>
  );
};
