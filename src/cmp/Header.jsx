import { useContext } from "react";
import { Link } from "react-router-dom";
import PokemonContext from "../PokemonContext";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setPokemonName] = useContext(PokemonContext);
  return (
    <header className="header">
      <Link to="/" className="logo-box">
        <img className="logo" src="./img/logo.svg" alt="pokemon logo" />
      </Link>
      <form
        className="search-bar"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);

          setPokemonName(formData.get("pokemon"));
        }}
      >
        <input name="pokemon" id="pokemon" placeholder="Search Pokemons" />
        <button className="btn search-btn">
          <svg
            fill="none"
            height="512"
            viewBox="0 0 25 25"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m20.78 18.7-2.9-2.9c1.09-1.4 1.68-3.11 1.68-4.91 0-2.15-.84-4.17-2.36-5.69-3.13-3.14-8.24003-3.14-11.37003 0-3.14 3.14-3.14 8.24 0 11.37 1.52 1.52 3.54 2.36 5.69003 2.36 1.82 0 3.55-.61 4.95-1.71l2.9 2.9c.2.2.45.29.71.29s.51-.1.71-.29c.39-.39.39-1.02 0-1.41zm-13.54003-3.54c-2.36-2.36-2.36-6.19 0-8.54 1.18-1.18 2.73-1.77 4.27003-1.77 1.54 0 3.09.59 4.27 1.77s1.77 2.66 1.77 4.27-.63 3.13-1.77 4.27-2.66 1.77-4.27 1.77c-1.61003 0-3.13003-.63-4.27003-1.77z" />
          </svg>
        </button>
      </form>
    </header>
  );
};

export default Header;
