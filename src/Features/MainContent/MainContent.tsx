import { memo } from 'react';

import { useSelector } from 'react-redux';

import { MovieType } from 'api/api';
import { getMovies } from 'bll/selectors/selectors';
import { Item } from 'Components/Item/Item';
import { List } from 'Components/ItemList/List';
import { Pagination } from 'Features/Pagination/Pagination';

export const MainContent = memo(() => {
  const movies = useSelector(getMovies);

  return (
    <>
      <List
        items={movies}
        renderItem={(movie: MovieType) => <Item movie={movie} key={movie.Title} />}
      />
      <Pagination />
    </>
  );
});
