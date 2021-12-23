import styled from 'styled-components';
import { lighten } from 'polished';

type PokemonCardProps = {
  opened: boolean;
};

const SPokemonCard: any = styled.article<PokemonCardProps>`
  position: relative;
  padding: 32px;
  border: 1px solid black;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.blue};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`;

SPokemonCard.Image = styled.img``;

SPokemonCard.Name = styled.h3`
  ${({ theme }) => theme.typography.headingSmall}

  color: ${({ theme }) => theme.colors.pureBlue}
`;

SPokemonCard.Info = styled.div``;

SPokemonCard.Text = styled.p``;

SPokemonCard.Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;

  height: 50px;
  width: 50px;
  border-radius: 77%;

  background-color: ${({ theme }) => theme.colors.red};
  color: ${({theme}) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => lighten(0.02, theme.colors.red)};
  }
`;

export default SPokemonCard;
