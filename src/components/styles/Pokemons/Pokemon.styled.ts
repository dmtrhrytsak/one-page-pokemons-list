import styled from 'styled-components';
import PokemonCard from '../../Pokemons/PokemonCard';

const StyledPokemon: any = styled.section``;

StyledPokemon.Card = styled(PokemonCard)`
  width: 400px;
  margin: 0 auto;

  cursor: default;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export default StyledPokemon;
