import { useQuery } from "@tanstack/react-query";
import fetchPokemon from "../fetch/fetchPokemon";
import ErrorBoundary from "../ErrorBoundary";

const Details = ({ pokemonName }) => {
  const results = useQuery(["details", pokemonName], fetchPokemon);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <img className="loader" src="../img/pokeball.svg" alt="" />
        <h2>Loading</h2>
      </div>
    );
  }
  const pokemon = {
    name: results.data.name,
    id: results.data.order,
    img: results.data.sprites.other["official-artwork"].front_default,
    stats: results.data.stats,
    types: results.data.types,
  };
  return (
    <div className="grid-col">
      <div className="pokemon-details">
        <header>
          <div className="img-box">
            <img src={pokemon.img} alt="pikachu" />
          </div>
          <h2>
            <span>{pokemon.id}</span> {pokemon.name}
          </h2>
          <ul className="types">
            {pokemon.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
        </header>
        <ul className="stats">
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              <h3 style={{ width: `${(stat.base_stat / 255) * 100}%` }}>
                {stat.stat.name.slice(0, 2)}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function DetailsErrorBoundary(props) {
  // ErrorBoundary does not care about the props passing, we can use the spread operator
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
