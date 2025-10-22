import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0, users: [] };

export const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
    fetchUsers: (state, action) => {
      state.users = action.payload;
      // console.log(state.users);
    },
  },
});

export const { increment, decrement, incrementByAmount, reset, fetchUsers } =
  counterSlice.actions;
export default counterSlice.reducer;
