import usePokemonList from "../usePokemonList";
import Pokemon from "./pokemon";
const PokemonList = () => {
  const [data] = usePokemonList();

  if (data.length === 0) {
    return <div>Loading</div>;
  }

  const pokemons = data?.results;
  return (
    <div className="grid-col">
      <ul className="pokemon-list">
        {pokemons.map((pokemon) => (
          <Pokemon pokemonName={pokemon.name} key={pokemon.name} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
