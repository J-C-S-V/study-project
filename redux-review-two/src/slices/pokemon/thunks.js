import { pokemonApi } from "../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
// import { startTimer } from "../timer/timerSlice";

export const getPokemonsThunk = (page = 0) => {
  return async (dispatch) => {
    dispatch(startLoadingPokemons());

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(setPokemons({ pokemons: data.results, page: page }));
  };
};
// let timerId = null;
// export const setTimer = () => {
//   return (dispatch) => {
//     // Check if a timer is already running to prevent duplicates
//     if (timerId) {
//       clearInterval(timerId);
//     }

//     // Set up the interval to dispatch the action every 3 seconds
//     timerId = setInterval(() => {
//       dispatch(startTimer());
//     }, 1000);
//   };
// };

//TODO: realizar peticion http con fetch
// const response = await fetch(
//   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
// );
// const data = await response.json();
// console.log(data);
