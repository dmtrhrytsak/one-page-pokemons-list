import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { RootState } from '../../redux/store';

import { IPokemon } from '../../lib/types/IPokemon';

import StyledPokemon from '../styles/Pokemons/Pokemon.styled';

const Pokemon = () => {
  const [currentPokemon, setCurrentPockemon] = useState<IPokemon | null>(null);

  const { items } = useSelector((state: RootState) => state.pokemons);

  const { pokemonName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundPokemon = items?.pokemons.find((pokemon) => pokemon.name === pokemonName);

    if (!foundPokemon) {
      navigate('/');

      return;
    }

    setCurrentPockemon(foundPokemon);
  }, [items, pokemonName, navigate]);

  if (!currentPokemon) {
    return <p>Loading...</p>;
  }

  return (
    <StyledPokemon>
      <StyledPokemon.Card
        name={currentPokemon.name}
        height={currentPokemon.height}
        weight={currentPokemon.weight}
        avatar={currentPokemon.avatar}
        isOpened
      />
    </StyledPokemon>
  );
};

export default Pokemon;
