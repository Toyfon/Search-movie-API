import { FC } from 'react';

import { useSelector } from 'react-redux';

import {
  selectCurrentTitle,
  selectMovies,
  selectMovieTotalCount,
} from 'bll/selectors/selectors';

export const SearchInfo: FC = () => {
  const movies = useSelector(selectMovies);
  const currentTitle = useSelector(selectCurrentTitle);
  const movieTotalCount = useSelector(selectMovieTotalCount);

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
