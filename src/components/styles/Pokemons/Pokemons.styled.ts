import styled from 'styled-components';

import PokemonLogo from './PokemonLogo.styled';

const SPokemons: any = styled.section``;

SPokemons.LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

SPokemons.Logo = styled(PokemonLogo)`
  margin-bottom: 20px;
`;

export default SPokemons;
