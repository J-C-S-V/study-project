import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsThunk } from "./slices/pokemon/thunks";
import { consoleLogSomething } from "./slices/pokemon/pokemonSlice";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { page, pokemons, isLoading } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemonsThunk());
  }, []);

  // useEffect(() => {
  //   dispatch(setTimer());
  // }, []);

  return (
    <>
      <h1>Pokemons</h1>
      <hr />
      <span>{isLoading ? "True" : "False"}</span>
      <ul>
        {pokemons.map((pokemon) => {
          return <li key={pokemon.name}>{pokemon.name}</li>;
        })}
      </ul>
      <button
        disabled={isLoading}
        // onClick={() => dispatch(getPokemons(page + 1))}
        onClick={() => dispatch(getPokemonsThunk(1))}
      >
        Load more pokemons
      </button>
      <button onClick={() => dispatch(consoleLogSomething())}>Click</button>
      <div>Page: {page}</div>
    </>
  );
};
