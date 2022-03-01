import { FC } from 'react';

import { useSelector } from 'react-redux';

import { getCurrentTitle, getMovies, getMovieTotalCount } from 'bll/selectors/selectors';

export const SearchInfo: FC = () => {
  const movies = useSelector(getMovies);
  const currentTitle = useSelector(getCurrentTitle);
  const movieTotalCount = useSelector(getMovieTotalCount);

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
