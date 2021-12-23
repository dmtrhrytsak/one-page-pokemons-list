import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PokemonCard from './PokemonCard';

import { getPokemons } from '../../redux/features/pokemonsSlice';

import { RootState } from '../../redux/store';
import { Status } from '../../lib/types/Status';

import SPokemonsList from '../styles/Pokemons/PokemonsList.styled';
import { Link } from 'react-router-dom';

const PokemonsList = () => {
  const { status, items } = useSelector((state: RootState) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  if (status === Status.LOADING) {
    return <p>Loading...</p>;
  }

  return (
    <SPokemonsList>
      {items?.pokemons.map(({ name, height, weight, avatar }) => (
        <Link to={name} key={name}>
          <PokemonCard
            name={name}
            height={height}
            weight={weight}
            avatar={avatar}
          />
        </Link>
      ))}
    </SPokemonsList>
  );
};

export default PokemonsList;
