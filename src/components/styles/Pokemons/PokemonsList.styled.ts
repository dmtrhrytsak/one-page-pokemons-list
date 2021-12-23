import styled from 'styled-components';
import Button from '../Utils/Button.styled';

const SPokemonsList: any = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

SPokemonsList.Button = styled(Button)`
  position: fixed;
  right: 50px;
  bottom: 55px;
`;

export default SPokemonsList;
