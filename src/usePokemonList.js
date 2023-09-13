import { useQuery } from "@tanstack/react-query";
import fetchPokemonList from "./fetch/fetchPokemonList";

export default function usePokemonList() {
  const results = useQuery(["pokemons"], fetchPokemonList);
  return [results?.data ?? [], results.status];
}
