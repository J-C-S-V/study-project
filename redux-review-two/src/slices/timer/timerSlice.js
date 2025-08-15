import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const timerSlice = createSlice({
  name: "Timer",
  initialState,
  reducers: {
    resetTimer: (state) => {
      state.value = 0;
    },
    startTimer: (state) => {
      state.value += 1;
    },
  },
});

export const { resetTimer, startTimer } = timerSlice.actions;
export default timerSlice.reducer;
