import { memo } from "react";

export const CounterChild = memo(() => {
  console.log("Child Counter");
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>Counter Child</h1>
    </div>
  );
});

// export default memo(CounterChild); => that's another way to export using memo
