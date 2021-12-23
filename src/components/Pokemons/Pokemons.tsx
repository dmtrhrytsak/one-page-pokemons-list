import { Link, Routes, Route } from 'react-router-dom';

import PokemonsList from './PokemonsList';
import Pokemon from './Pokemon';

import SPokemons from '../styles/Pokemons/Pokemons.styled';

const Pokemons = () => {
  return (
    <SPokemons>
      <SPokemons.LogoWrapper>
        <Link to="/">
          <SPokemons.Logo src="assets/pokemon-logo.png" alt="Pokemon Logo" />
        </Link>
      </SPokemons.LogoWrapper>

      <Routes>
        <Route path="/" element={<PokemonsList />} />
        <Route path=":pokemonName" element={<Pokemon />} />
      </Routes>
    </SPokemons>
  );
};

export default Pokemons;
