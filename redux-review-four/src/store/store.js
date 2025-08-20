import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "../slices/counterSlice"; // Pending here!

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});
