const fetchPokemonList = async () => {
  const apiRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=999`
  );

  if (!apiRes.ok) {
    throw new Error(`fetch not ok`);
  }
  // React Query expects a promise so we don't have to await the json.
  return apiRes.json();
};

export default fetchPokemonList;
