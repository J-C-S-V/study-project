// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";

// interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 10,
// };

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     // Use the PayloadAction type to declare the contents of `action.payload`
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload;
//     },
//   },
// });

// console.log(counterSlice);

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

interface CounterSlice {
  value: number;
}

const initialState: CounterSlice = {
  value: 10,
};

export const counterSlice = createSlice({
  name: "Juank",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
console.log(increment);
