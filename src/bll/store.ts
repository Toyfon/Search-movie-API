import { configureStore } from '@reduxjs/toolkit';

import appReducer from './appSlice';
import moviesReducer from './searchMovieSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
