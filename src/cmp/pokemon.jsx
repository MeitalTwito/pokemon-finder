import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPokemon from "../fetch/fetchPokemon";
import PokemonContext from "../PokemonContext";

const Pokemon = ({ pokemonName }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, setPokemonName] = useContext(PokemonContext);
  const results = useQuery(["details", pokemonName], fetchPokemon);
  if (results.isLoading) {
    return <li>{pokemonName}</li>;
  }
  const pokemon = {
    name: results.data.name,
    id: results.data.order,
    img: results.data.sprites.other["official-artwork"].front_default,
    type: results.data.types[0].type.name,
  };

  return (
    <li className={`${pokemon.type} pokemon-card`}>
      <img src={pokemon.img} alt={pokemon.name} />
      <h2>
        <span>
          {(pokemon.id < 10 && pokemon.id.toString().padStart(3, "0")) ||
            (pokemon.id >= 10 && pokemon.id.toString().padStart(3, "0")) ||
            (pokemon.id >= 100 && pokemon.id.toString())}
        </span>
        {" " + pokemon.name.toUpperCase()}
      </h2>
      <button className="info-btn" onClick={() => setPokemonName(pokemon.name)}>
        <svg
          height="512pt"
          viewBox="0 0 512 512"
          width="512pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0" />
        </svg>
      </button>
    </li>
  );
};
export default Pokemon;
