import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from './types';

const initialState: AuthState = {
  loading: false,
  lang: 'uz',
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLoading: (state, {payload}) => {
      state.loading = payload;
    },
    changeLang: (state, {payload}) => {
      state.lang = payload;
    },
  },
});

export const {changeLang, handleLoading} = slice.actions;

export default slice.reducer;
