import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { fetchPokemons } from '../../lib/types/api/pokemons';

import { IPokemon } from '../../lib/types/IPokemon';
import { Status } from '../../lib/types/Status';

export const getPokemons = createAsyncThunk<
  State['items'] | undefined,
  void,
  { rejectValue: string }
>('pokemons/getPokemons', async (_, { rejectWithValue }) => {
  try {
    return await fetchPokemons();
  } catch (error) {
    rejectWithValue('Error when fetching pokemons from the server');
  }
});

export const getNextPokemons = createAsyncThunk<
  State['items'] | undefined,
  string,
  { rejectValue: string }
>('pokemons/getNextPokemons', async (next, { rejectWithValue }) => {
  try {
    const queryParams = (next.match(/\?.+/) || [''])[0];

    return await fetchPokemons(queryParams);
  } catch (error) {
    rejectWithValue('Error when fetching pokemons from the server');
  }
});

type State = {
  status: Status;
  items: {
    next: string | null;
    previous: string | null;
    pokemons: IPokemon[];
  } | null;
};

const initialState: State = {
  status: Status.LOADING,
  items: null,
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending.type, (state: State) => {
        state.status = Status.LOADING;
      })
      .addCase(
        getPokemons.fulfilled.type,
        (state: State, { payload }: PayloadAction<State['items']>) => {
          state.items = payload;
          state.status = Status.SUCCESS;
        }
      )
      .addCase(getPokemons.rejected.type, (state: State) => {
        state.status = Status.ERROR;
      })
      .addCase(getNextPokemons.pending.type, (state: State) => {
        state.status = Status.LOADING;
      })
      .addCase(getNextPokemons.fulfilled.type, (state: State, { payload }: PayloadAction<State['items']>) => {
        state.items = payload;
        state.status = Status.SUCCESS;
      })
      .addCase(getNextPokemons.rejected.type, (state: State) => {
        state.status = Status.ERROR;
      });
  },
});

export default pokemonsSlice.reducer;
