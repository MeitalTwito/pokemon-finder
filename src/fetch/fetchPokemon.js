const fetchPokemon = async ({ queryKey }) => {
  const pokemonName = queryKey[1];
  //   const region = queryKey[2];
  const apiRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  if (!apiRes.ok) {
    throw new Error(`details/${pokemonName} fetch not ok`);
  }
  // React Query expects a promise so we don't have to await the json.
  return apiRes.json();
};

export default fetchPokemon;
