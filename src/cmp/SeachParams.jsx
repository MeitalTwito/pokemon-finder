import Details from "./Details";
import PokemonList from "./PokemonList";
import { useContext } from "react";
import PokemonContext from "../PokemonContext";
const SearchParams = () => {
  const [pokemonName] = useContext(PokemonContext);
  return (
    <div className="main">
      <Details pokemonName={pokemonName} />
      <PokemonList />
    </div>
  );
};

export default SearchParams;
