import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './features/pokemonsSlice';

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
