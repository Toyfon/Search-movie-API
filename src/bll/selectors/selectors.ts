import { MovieType } from 'api/api';
import { StatusType } from 'bll/appSlice';
import { RootState } from 'bll/store';

export const selectStatus = (state: RootState): StatusType => state.app.status;
export const selectError = (state: RootState): string | null => state.app.error;
export const selectMovies = (state: RootState): MovieType[] => state.movies.movies;
export const selectCurrentTitle = (state: RootState): string => state.movies.currentTitle;
export const selectMovieTotalCount = (state: RootState): number =>
  state.movies.totalResults;
export const selectCurrentPage = (state: RootState): number => state.movies.currentPage;
