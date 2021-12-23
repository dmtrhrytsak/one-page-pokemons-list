import axios from 'axios';

import { IPokemon } from '../IPokemon';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

interface PokemonsResponse {
  next: string | null;
  previous: string | null;
  results: { name: IPokemon['name'] }[];
}

const getPokemons = async (queryParams?: string) => {
  const response = await axios.get<PokemonsResponse>(`${BASE_URL}${queryParams}`);

  return response.data;
};

const getPokemonInfo = async (name: IPokemon['name']) => {
  const response = await axios.get(`${BASE_URL}${name}`);

  return response.data;
};

export const fetchPokemons = async (queryParams: string = '') => {
  const pokemonsResponse = await getPokemons(queryParams);

  const pokemons: IPokemon[] = [];

  for (const pokemon of pokemonsResponse.results) {
    const pokemonInfo = await getPokemonInfo(pokemon.name);

    pokemons.push({
      name: pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1),
      height: pokemonInfo.height,
      weight: pokemonInfo.weight,
      avatar: pokemonInfo.sprites.back_default,
    });
  }

  return {
    next: pokemonsResponse.next,
    previous: pokemonsResponse.previous,
    pokemons,
  };
};
