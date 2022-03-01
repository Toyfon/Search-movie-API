import { instance } from './instance';

const key = 'e061473e';
export const API = {
  searchFilmByTitle(title: string, page: number = 1) {
    return instance.get<FullFilledResponseType & RejectedResponseType>(
      `?apikey=${[key]}&s=${title}&page=${page}`,
    );
  },
};

// types
export type MovieType = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type FullFilledResponseType = {
  Search: MovieType[];
  Response: 'True' | 'False';
  totalResults: string;
};

export type RejectedResponseType = {
  Error: string;
  Response: string;
};
