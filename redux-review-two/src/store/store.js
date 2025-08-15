import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counter/counterSlice";
import pokemonSlice from "../slices/pokemon/pokemonSlice";
import timerSlice from "../slices/timer/timerSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    pokemons: pokemonSlice,
    timer: timerSlice,
  },
});
