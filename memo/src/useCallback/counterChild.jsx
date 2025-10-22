// export const CounterChild = ({ counter }) => {
//   console.log("Child Counter");
//   return (
//     <div style={{ border: "1px solid black" }}>
//       <h1>Counter Child</h1>
//     </div>
//   );
// };

export const CounterChild = (props) => {
  console.log("Child Counter");
  console.log(`Counter: ${props.counter}`);
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>Counter Child</h1>
    </div>
  );
};
