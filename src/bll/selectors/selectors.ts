import { MovieType } from 'api/api';
import { StatusType } from 'bll/appSlice';
import { RootState } from 'bll/store';

export const getStatus = (state: RootState): StatusType => state.app.status;
export const getError = (state: RootState): string | null => state.app.error;
export const getMovies = (state: RootState): MovieType[] => state.movies.movies;
export const getCurrentTitle = (state: RootState): string => state.movies.currentTitle;
export const getMovieTotalCount = (state: RootState): number => state.movies.totalResults;
export const getCurrentPage = (state: RootState): number => state.movies.currentPage;
