import { Routes, Route } from 'react-router-dom';

import { Wrapper } from './components/styles/Utils/Wrapper.styled';
import Pokemons from './components/Pokemons/Pokemons';

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/*" element={<Pokemons />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
