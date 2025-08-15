import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, setTimer } from "./slices/pokemon/thunks";
import { resetTimer, startTimer } from "./slices/timer/timerSlice";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { page, pokemons, isLoading } = useSelector((state) => state.pokemons);
  const lol = useSelector((state) => state.pokemons);
  const timerValue = useSelector((state) => state.timer);

  console.log(timerValue);
  console.log("lol", lol);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  // useEffect(() => {
  //   dispatch(setTimer());
  // }, []);

  return (
    <>
      <h1>Pokemons</h1>
      <hr />
      <span>{isLoading ? "Treu" : "False"}</span>
      <ul>
        {pokemons.map((pokemon) => {
          return <li key={pokemon.name}>{pokemon.name}</li>;
        })}
      </ul>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page + 1))}
      >
        Load more pokemons
      </button>
      <div>Page: {page}</div>
      <div>
        {/* That type is the name of the action located in the timerSlice */}
        Timer: {timerValue.value}
      </div>
      <span onClick={() => dispatch(resetTimer())}>Reset</span>
    </>
  );
};
