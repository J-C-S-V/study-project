import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
  timer: 0,
};

export const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    counter: (state) => {
      state.value += 1;
    },
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { counter, increment } = counterSlice.actions;
export default counterSlice.reducer;
