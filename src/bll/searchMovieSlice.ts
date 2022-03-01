import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setAppError, setAppStatus } from './appSlice';

import { API, FullFilledResponseType, MovieType, RejectedResponseType } from 'api/api';

export const fetchMovies = createAsyncThunk<
  { data: FullFilledResponseType },
  { title: string; page?: number },
  {
    rejectValue: RejectedResponseType;
  }
>(
  'movies/FetchMovies',
  async (
    { title, page }: { title: string; page?: number },
    { dispatch, rejectWithValue },
  ) => {
    dispatch(setAppStatus('loading'));
    try {
      const res = await API.searchFilmByTitle(title, page);
      if (res.data.Response === 'True') {
        dispatch(setAppStatus('succeeded'));
        return { data: res.data };
      }
      dispatch(setAppStatus('failed'));
      return rejectWithValue({
        Error: res.data.Error === 'Incorrect IMDb ID.' ? 'Enter title' : res.data.Error,
        Response: res.data.Response,
      });
    } catch (e: any) {
      dispatch(setAppStatus('failed'));
      dispatch(setAppError(e.message));
      return rejectWithValue(e.message);
    }
  },
);

export const fetchSuccessful = fetchMovies.fulfilled;
export const fetchFailed = fetchMovies.rejected;

const searchMovieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [] as MovieType[],
    currentTitle: '' as string,
    totalResults: 0 as number,
    currentPage: 1 as number,
  },
  reducers: {
    setCurrentTitle: (state, { payload }: PayloadAction<string>) => {
      state.currentTitle = payload;
    },
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
    clearMoviesData: state => {
      state.movies = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchSuccessful, (state, action) => {
      state.movies = action.payload.data.Search;
      state.totalResults = +action.payload.data.totalResults;
    });
  },
});

export const { setCurrentTitle, setCurrentPage, clearMoviesData } =
  searchMovieSlice.actions;

export default searchMovieSlice.reducer;
