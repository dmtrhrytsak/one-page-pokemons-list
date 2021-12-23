import { useNavigate } from 'react-router-dom';
import { IPokemon } from '../../lib/types/IPokemon';

import SPokemonCard from '../styles/Pokemons/PokemonCard.styled';

type Props = { className?: string; isOpened?: boolean } & IPokemon;

const PokemonCard: React.FC<Props> = ({
  className,
  name,
  height,
  weight,
  avatar,
  isOpened,
}) => {
  const navigate = useNavigate();

  return (
    <SPokemonCard className={className} isOpened>
      <SPokemonCard.Image src={avatar} alt={name} />
      <SPokemonCard.Name>{name}</SPokemonCard.Name>

      <SPokemonCard.Info>
        <SPokemonCard.Text>📏 Height: {height}</SPokemonCard.Text>
        <SPokemonCard.Text>⚖️ Weight: {weight}</SPokemonCard.Text>
      </SPokemonCard.Info>

      {isOpened && (
        <SPokemonCard.Close onClick={() => navigate(-1)}>X</SPokemonCard.Close>
      )}
    </SPokemonCard>
  );
};

export default PokemonCard;
