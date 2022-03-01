import { FC } from 'react';

import { MovieType } from 'api/api';
import { useTypedSelector } from 'hooks/typed-hooks';

export const SearchInfo: FC = () => {
  const movies = useTypedSelector<MovieType[]>(state => state.movies.movies);
  const currentTitle = useTypedSelector<string>(state => state.movies.currentTitle);
  const movieTotalCount = useTypedSelector<number>(state => state.movies.totalResults);

  return (
    <div className="container">
      {movies.length > 0 && (
        <h3>
          You searched for: {currentTitle} , {movieTotalCount} results found
        </h3>
      )}
    </div>
  );
};
