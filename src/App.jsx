import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./cmp/Header";
import SearchParams from "./cmp/SeachParams";
import PokemonContext from "./PokemonContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // don't refetch
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const pokemonName = useState("pikachu");
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <PokemonContext.Provider value={pokemonName}>
          <Header />
          <Routes>
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </PokemonContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
